export type VisualizationType = 'array'

export type AlgorithmSnapshot = {
  values: number[]
  pointers?: Record<string, number>
  activeRange?: [number, number]
  compared?: number[]
  settled?: number[]
  result?: number
}

export type AlgorithmStep = {
  title: string
  explanation: string
  variables: Record<string, string | number>
  visualizationType: VisualizationType
  snapshot: AlgorithmSnapshot
}

export type AlgorithmRendererProps = {
  step: AlgorithmStep
}

export type AlgorithmStepGenerator = () => AlgorithmStep[]
