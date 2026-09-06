import type { AlgorithmStep, AlgorithmStepGenerator } from './types'

const demoValues = [1, 8, 6, 2, 5, 4, 8, 3]

const createStep = (
  title: string,
  explanation: string,
  values: Record<string, string | number>,
  pointers: Record<string, number>,
  compared: number[],
  settled: number[],
  maxArea: number,
  result?: number,
): AlgorithmStep => {
  const left = pointers.left
  const right = pointers.right

  return {
    title,
    explanation,
    variables: { ...values, maxArea },
    visualizationType: 'array',
    snapshot: {
      values: demoValues,
      pointers,
      activeRange: [left, right],
      compared,
      settled,
      result,
    },
  }
}

export const generateContainerSteps: AlgorithmStepGenerator = () => {
  const steps: AlgorithmStep[] = []
  let left = 0
  let right = demoValues.length - 1
  let maxArea = 0
  const settled: number[] = []

  steps.push(
    createStep(
      '从数组两端开始',
      '两个指针分别站在最左和最右，先计算当前容器，再移动高度较短的一侧。',
      { left, right, leftHeight: demoValues[left], rightHeight: demoValues[right], area: 0 },
      { left, right },
      [],
      [],
      maxArea,
    ),
  )

  while (left < right) {
    const leftHeight = demoValues[left]
    const rightHeight = demoValues[right]
    const area = Math.min(leftHeight, rightHeight) * (right - left)
    maxArea = Math.max(maxArea, area)
    const limitingSide = leftHeight <= rightHeight ? 'left' : 'right'
    const limitingHeight = Math.min(leftHeight, rightHeight)
    const nextLeft = leftHeight <= rightHeight ? left + 1 : left
    const nextRight = leftHeight <= rightHeight ? right : right - 1

    steps.push(
      createStep(
        `计算区间 [${left}, ${right}]`,
        `宽度为 ${right - left}，较短高度为 ${limitingHeight}，当前面积为 ${area}。移动 ${limitingSide} 指针，才有机会找到更高的边。`,
        {
          left,
          right,
          leftHeight,
          rightHeight,
          width: right - left,
          area,
        },
        { left, right },
        [left, right],
        [...settled],
        maxArea,
        maxArea,
      ),
    )

    if (leftHeight <= rightHeight) {
      settled.push(left)
      left = nextLeft
    } else {
      settled.push(right)
      right = nextRight
    }
  }

  steps.push(
    createStep(
      '得到最大面积',
      `指针相遇，遍历结束。示例数组能装下的最大面积是 ${maxArea}。`,
      { left, right, area: 0 },
      { left, right },
      [],
      [...settled],
      maxArea,
      maxArea,
    ),
  )

  return steps
}

const generators: Record<string, AlgorithmStepGenerator> = {
  '11-盛最多水的容器': generateContainerSteps,
}

export const getAlgorithmSteps = (problemSlug: string) => generators[problemSlug]?.() ?? null
