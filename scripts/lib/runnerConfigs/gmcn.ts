import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'e10E4',
  showPriorities: true,
  skipAlphaConvert: true,
  initialState: 'showFuncUnbound',
  highlightOverrides: { b: 'highlighted' },
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: true },
  highlightOverrideActiveAfterStart: true
}

export default config