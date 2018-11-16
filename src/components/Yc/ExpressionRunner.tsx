import { css } from 'emotion'
import React from 'react'
import Container, { ContainerProps } from 'src/components/Container'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/Yc/ExpressionRunnerControls'
import ExpressionRunnerExplanation from 'src/components/Yc/ExpressionRunnerExplanation'
import { lineHeights } from 'src/lib/theme'
import { isContainerWithState } from 'src/lib/yc/expressionContainerGuards'
import ExpressionContainerManager from 'src/lib/yc/ExpressionContainerManager'
import {
  ExpressionContainerStates,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

// Must be equal to 1 / N to make timer count seconds evenly
const autoplaySpeed = 250

type InitializeInstruction =
  | {
      type: 'stepForwardUntilContainerState'
      state: ExpressionContainerStates
    }
  | {
      type: 'stepForwardUntilPreviouslyChangedExpressionState'
      state: CallStates
    }
  | {
      type: 'nextIteration'
    }

interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideControls: boolean
  hideExplanations: boolean
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: ReadonlyArray<InitializeInstruction>
  maxStepsAllowed?: number
  lastAllowedExpressionState?: CallStates
  containerSize: ContainerProps['size']
  hideLeftMostPrioritiesExplanation: boolean
  resetIndex: boolean
  hidePlayButton?: boolean
  hideForwardAndBackButtons?: boolean
}

interface ExpressionRunnerState {
  expressionContainerManagerState: ExpressionContainerManager['currentState']
  isPlaying: boolean
}

// Use floor() + 1 instead of ceil() to make sure it's nonzero
const numSecondsRemaining = (numStepsRemaining: number) =>
  Math.floor((numStepsRemaining * autoplaySpeed) / 1000) + 1

export default class ExpressionRunner extends React.Component<
  ExpressionRunnerProps,
  ExpressionRunnerState
> {
  public static defaultProps = {
    hidePriorities: expressionRunnerContextDefault.hidePriorities,
    hideControls: false,
    hideExplanations: false,
    variableSize: expressionRunnerContextDefault.variableSize,
    initializeInstructions: [],
    containerSize: 'xxs',
    resetIndex: false,
    hideLeftMostPrioritiesExplanation: false
  }
  private interval: NodeJS.Timer | null = null
  private expressionContainerManager: ExpressionContainerManager
  private controlsRef = React.createRef<HTMLDivElement>()

  constructor(props: ExpressionRunnerProps) {
    super(props)
    const { expressionContainer, lastAllowedExpressionState } = props
    this.expressionContainerManager = new ExpressionContainerManager({
      expressionContainer,
      lastAllowedExpressionState
    })

    this.state = {
      expressionContainerManagerState: this.expressionContainerManager
        .currentState,
      isPlaying: false
    }
  }

  public componentDidMount() {
    const { initializeInstructions, maxStepsAllowed, resetIndex } = this.props
    if (initializeInstructions) {
      initializeInstructions.forEach(initializeInstruction => {
        if (initializeInstruction.type === 'stepForwardUntilContainerState') {
          this.expressionContainerManager.stepForwardUntilContainerState(
            initializeInstruction.state
          )
        } else if (
          initializeInstruction.type ===
          'stepForwardUntilPreviouslyChangedExpressionState'
        ) {
          this.expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
            initializeInstruction.state
          )
        } else if (initializeInstruction.type === 'nextIteration') {
          this.expressionContainerManager.stepForward()
          this.expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
            'default'
          )
        }
      })

      if (resetIndex) {
        this.expressionContainerManager.startIndex = this.expressionContainerManager.currentIndex
      }
      this.expressionContainerManager.minimumIndex = this.expressionContainerManager.currentIndex

      this.syncState()
    }

    if (maxStepsAllowed) {
      this.expressionContainerManager.maximumIndex =
        this.expressionContainerManager.currentIndex + maxStepsAllowed
      this.syncState()
    }
  }

  public render() {
    const {
      hideControls,
      hideExplanations,
      hidePriorities,
      variableSize,
      containerSize,
      hideLeftMostPrioritiesExplanation,
      hidePlayButton,
      hideForwardAndBackButtons
    } = this.props
    const { expressionContainerManagerState, isPlaying } = this.state
    return (
      <ExpressionRunnerContext.Provider
        value={{
          hidePriorities,
          variableSize,
          isDoneOrReady:
            isContainerWithState(
              expressionContainerManagerState.expressionContainer,
              'done'
            ) ||
            isContainerWithState(
              expressionContainerManagerState.expressionContainer,
              'ready'
            )
        }}
      >
        <Container size={'md'} horizontalPadding={0} verticalMargin={1.75}>
          <Container
            size={containerSize === 'xxs' ? 'xs' : 'sm'}
            horizontalPadding={0}
            verticalMargin={0}
          >
            {!hideExplanations && (
              <ExpressionRunnerExplanation
                isPlaying={isPlaying}
                numSecondsRemaining={numSecondsRemaining(
                  expressionContainerManagerState.numStepsRemaining
                )}
                expressionContainer={
                  expressionContainerManagerState.expressionContainer
                }
                isDone={isContainerWithState(
                  expressionContainerManagerState.expressionContainer,
                  'done'
                )}
                currentStep={expressionContainerManagerState.currentStep}
                currentSubstep={expressionContainerManagerState.currentSubstep}
                hideLeftMostPrioritiesExplanation={
                  hideLeftMostPrioritiesExplanation
                }
              />
            )}
          </Container>
          <Container
            size={containerSize}
            horizontalPadding={0}
            verticalMargin={0}
          >
            <div
              className={css`
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  line-height: ${lineHeights(1.3, { ignoreLocale: true })};
                  opacity: ${isPlaying ? 0.5 : 1};
                  ${isPlaying ? 'filter: grayscale(50%);' : ''};
                `}
              >
                <ExpressionBox
                  expression={
                    expressionContainerManagerState.expressionContainer
                      .expression
                  }
                />
              </div>
            </div>
          </Container>
          <Container
            size={containerSize}
            horizontalPadding={0}
            verticalMargin={0}
          >
            {!hideControls && (
              <div ref={this.controlsRef}>
                <ExpressionRunnerControls
                  onNextClick={this.stepForward}
                  onPreviousClick={this.stepBackward}
                  canStepForward={
                    expressionContainerManagerState.canStepForward
                  }
                  canStepBackward={
                    expressionContainerManagerState.canStepBackward
                  }
                  showPlayButton={!hidePlayButton}
                  isPlaying={isPlaying}
                  isDone={isContainerWithState(
                    expressionContainerManagerState.expressionContainer,
                    'done'
                  )}
                  onAutoClick={this.autoplay}
                  onPauseClick={this.pause}
                  onResetClick={this.reset}
                  hideForwardAndBackButtons={!!hideForwardAndBackButtons}
                />
              </div>
            )}
          </Container>
        </Container>
      </ExpressionRunnerContext.Provider>
    )
  }

  private stepForward = () => {
    this.step('forward')
  }

  private stepBackward = () => {
    this.step('backward')
  }

  private autoplay = () => {
    this.interval = setInterval(() => {
      if (this.state.expressionContainerManagerState.canStepForward) {
        this.step('forward')
      } else {
        this.pause()
      }
    }, autoplaySpeed)
    this.setState({
      isPlaying: true
    })
  }

  private pause = () => {
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.setState({
      isPlaying: false
    })
  }

  private reset = () => {
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.setState({
      isPlaying: false
    })
    this.step('reset')
  }

  private step(direction: 'forward' | 'backward' | 'reset') {
    const previousOffsetTop = this.controlsRef.current!.offsetTop
    if (direction === 'forward') {
      this.expressionContainerManager.stepForward()
    } else if (direction === 'backward') {
      this.expressionContainerManager.stepBackward()
    } else {
      this.expressionContainerManager.reset()
    }
    this.syncState(() => {
      window.scroll(
        0,
        window.pageYOffset +
          this.controlsRef.current!.offsetTop -
          previousOffsetTop
      )
    })
  }

  private syncState(callback?: () => void) {
    this.setState(
      {
        expressionContainerManagerState: this.expressionContainerManager
          .currentState
      },
      callback
    )
  }
}