import { VariableNames } from 'src/types/yc/VariableNames'

export interface VariableExpression {
  readonly type: 'variable'
  readonly name: VariableNames
  readonly bound: boolean
  readonly highlightType: VariableUiStates['highlightType']
  readonly badgeType: VariableUiStates['badgeType']
  readonly argPriorityAgg: number[]
  readonly funcPriorityAgg: number[]
}

type WithUiState<S extends VariableUiStates> = VariableExpression & S

interface VariableInactiveState {
  highlightType: 'inactive'
  badgeType: 'none'
}

interface VariableActiveState {
  highlightType: 'active'
  badgeType: 'none'
}

interface VariableEmphasizePriorityOneState {
  highlightType: 'activeEmphasizePriorityOne'
  badgeType: 'none'
}

interface VariableHighlightFuncBoundState {
  highlightType: 'highlighted'
  badgeType: 'funcBound'
}

interface VariableActiveFuncBoundState {
  highlightType: 'active'
  badgeType: 'funcBound'
}

interface VariableHighlightFuncArgState {
  highlightType: 'highlighted'
  badgeType: 'funcArg'
}

interface VariableActiveFuncArgState {
  highlightType: 'active'
  badgeType: 'funcArg'
}

interface VariableHighlightFuncUnboundState {
  highlightType: 'unboundHighlighted'
  badgeType: 'funcUnbound'
}

interface VariableHighlightCallArgState {
  highlightType: 'highlighted'
  badgeType: 'callArg'
}

interface VariableActiveCallArgState {
  highlightType: 'highlighted'
  badgeType: 'callArg'
}

interface VariableConflictFuncUnboundState {
  highlightType: 'conflict'
  badgeType: 'funcUnbound'
}

interface VariableConflictCallArgState {
  highlightType: 'conflict'
  badgeType: 'callArg'
}

interface VariableConflictResolvedFuncUnboundState {
  highlightType: 'conflictResolved'
  badgeType: 'funcUnbound'
}

interface VariableConflictResolvedFuncBoundState {
  highlightType: 'conflictResolved'
  badgeType: 'funcBound'
}

interface VariableMatchFuncBoundState {
  highlightType: 'match'
  badgeType: 'funcBound'
}

interface VariableBetaReducedState {
  highlightType: 'match'
  badgeType: 'betaReduced'
}

interface VariableRemovedFuncArgState {
  highlightType: 'removed'
  badgeType: 'funcArg'
}

interface VariableRemovedCallArgState {
  highlightType: 'removed'
  badgeType: 'callArg'
}

export type VariableUiStates =
  | VariableInactiveState
  | VariableActiveState
  | VariableEmphasizePriorityOneState
  | VariableHighlightFuncBoundState
  | VariableActiveFuncBoundState
  | VariableHighlightFuncArgState
  | VariableActiveFuncArgState
  | VariableHighlightFuncUnboundState
  | VariableHighlightCallArgState
  | VariableActiveCallArgState
  | VariableConflictFuncUnboundState
  | VariableConflictCallArgState
  | VariableConflictResolvedFuncUnboundState
  | VariableConflictResolvedFuncBoundState
  | VariableMatchFuncBoundState
  | VariableBetaReducedState
  | VariableRemovedFuncArgState
  | VariableRemovedCallArgState

export type VariableInactive = WithUiState<VariableInactiveState>
export type VariableActive = WithUiState<VariableActiveState>
export type VariableEmphasizePriorityOne = WithUiState<
  VariableEmphasizePriorityOneState
>
export type VariableHighlightFuncBound = WithUiState<
  VariableHighlightFuncBoundState
>
export type VariableActiveFuncBound = WithUiState<VariableActiveFuncBoundState>
export type VariableHighlightFuncArg = WithUiState<
  VariableHighlightFuncArgState
>
export type VariableActiveFuncArg = WithUiState<VariableActiveFuncArgState>
export type VariableHighlightFuncUnbound = WithUiState<
  VariableHighlightFuncUnboundState
>
export type VariableHighlightCallArg = WithUiState<
  VariableHighlightCallArgState
>
export type VariableActiveCallArg = WithUiState<VariableActiveCallArgState>
export type VariableConflictFuncUnbound = WithUiState<
  VariableConflictFuncUnboundState
>
export type VariableConflictCallArg = WithUiState<VariableConflictCallArgState>
export type VariableConflictResolvedFuncUnbound = WithUiState<
  VariableConflictResolvedFuncUnboundState
>
export type VariableConflictResolvedFuncBound = WithUiState<
  VariableConflictResolvedFuncBoundState
>
export type VariableMatchFuncBound = WithUiState<VariableMatchFuncBoundState>
export type VariableBetaReduced = WithUiState<VariableBetaReducedState>
export type VariableRemovedFuncArg = WithUiState<VariableRemovedFuncArgState>
export type VariableRemovedCallArg = WithUiState<VariableRemovedCallArgState>

export type CallExpressionStates =
  | 'inactive'
  | 'active'
  | 'showFuncBound'
  | 'showFuncArg'
  | 'showFuncUnbound'
  | 'showCallArg'
  | 'needsAlphaConvert'
  | 'alphaConvertDone'
  | 'betaReducePreviewBefore'
  | 'betaReducePreviewAfter'
  | 'betaReducePreviewCrossed'

export interface CallExpression {
  readonly state: CallExpressionStates
  readonly type: 'call'
  readonly arg: Expression
  readonly func: Expression
  readonly priority: number
}

export interface FunctionExpression {
  readonly type: 'function'
  readonly arg: VariableExpression
  readonly body: Expression
}

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression

type FunctionWithArgBody<
  A extends VariableExpression,
  B extends Expression
> = FunctionExpression & {
  readonly arg: A
  readonly body: B
}

type NonExecutable<E extends Expression> = CallExpression & {
  readonly arg: E
  readonly state: 'inactive'
  readonly func: E
}

type Executable<
  S extends CallExpressionStates,
  F extends FunctionExpression,
  V extends VariableExpression
> = CallExpression & {
  readonly arg: V | F
  readonly state: S
  readonly func: F
  readonly priority: 1
}

type ExecutableWithArgFunc<
  S extends CallExpressionStates,
  AV extends VariableExpression,
  AF extends FunctionExpression,
  F extends FunctionExpression
> = CallExpression & {
  readonly arg: AV | AF
  readonly state: S
  readonly func: F
  readonly priority: 1
}

export interface InactiveFunction
  extends FunctionWithArgBody<VariableInactive, InactiveChild> {}
export interface NonExecutableInactiveCall
  extends NonExecutable<InactiveChild> {}
export interface ExecutableInactiveCall
  extends Executable<'inactive', InactiveFunction, VariableInactive> {}
export type InactiveCall = NonExecutableInactiveCall | ExecutableInactiveCall
export type InactiveChild =
  | VariableInactive
  | InactiveFunction
  | NonExecutableInactiveCall
export type Inactive = InactiveChild | ExecutableInactiveCall

// ExecutableActiveVariable will only appear
// as an arg of ExecutableActiveCall or
// as an arg of arg/func of ExecutableActiveCall's child function.
export interface ActiveFunction
  extends FunctionWithArgBody<VariableActive, ActiveChild> {}
export interface ExecutableActiveFunction
  extends FunctionWithArgBody<VariableEmphasizePriorityOne, ActiveChild> {}
export interface ExecutableActiveCall
  extends Executable<
      'active',
      ExecutableActiveFunction,
      VariableEmphasizePriorityOne
    > {}
export interface NonExecutableActiveCall extends NonExecutable<ActiveChild> {}
export type ActiveChild =
  | VariableActive
  | ActiveFunction
  | NonExecutableActiveCall

// On func side, variables (except args) are all VariableHighlightFuncBound
// On arg side, variables are all VariableActive
export interface ExecutableShowFuncBoundCall
  extends ExecutableWithArgFunc<
      'active',
      VariableActive,
      ShowFuncBoundArgFunction,
      ShowFuncBoundFuncFunction
    > {}
export interface ShowFuncBoundArgFunction
  extends FunctionWithArgBody<VariableActive, ShowFuncBoundArgChild> {}
export interface ShowFuncBoundFuncFunction
  extends FunctionWithArgBody<VariableActive, ShowFuncBoundFuncChild> {}
export type ShowFuncBoundArgChild =
  | VariableActive
  | ShowFuncBoundArgFunction
  | NonExecutableShowFuncBoundArgCall
export interface NonExecutableShowFuncBoundArgCall
  extends NonExecutable<ShowFuncBoundArgChild> {}
export type ShowFuncBoundFuncChild =
  | VariableHighlightFuncBound
  | ShowFuncBoundFuncFunction
  | NonExecutableShowFuncBoundFuncCall
export interface NonExecutableShowFuncBoundFuncCall
  extends NonExecutable<ShowFuncBoundFuncChild> {}

export type ShowFuncArgVariable =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
export interface ShowFuncArgFunction
  extends FunctionWithArgBody<ShowFuncArgVariable, ShowFuncArgChild> {}
export interface ExecutableShowFuncArgCall
  extends Executable<'active', ShowFuncArgFunction, ShowFuncArgVariable> {}
export interface NonExecutableShowFuncArgCall
  extends NonExecutable<ShowFuncArgChild> {}
export type ShowFuncArgChild =
  | ShowFuncArgVariable
  | ShowFuncArgFunction
  | NonExecutableShowFuncArgCall

export type ShowFuncUnboundVariable =
  | WithUiState<VariableActiveState>
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
export interface ShowFuncUnboundFunction
  extends FunctionWithArgBody<ShowFuncUnboundVariable, ShowFuncUnboundChild> {}
export interface ExecutableShowFuncUnboundCall
  extends Executable<
      'active',
      ShowFuncUnboundFunction,
      ShowFuncUnboundVariable
    > {}
export interface NonExecutableShowFuncUnboundCall
  extends NonExecutable<ShowFuncUnboundChild> {}
export type ShowFuncUnboundChild =
  | ShowFuncUnboundVariable
  | ShowFuncUnboundFunction
  | NonExecutableShowFuncUnboundCall

export type ShowCallArgVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
export interface ShowCallArgFunction
  extends FunctionWithArgBody<ShowCallArgVariable, ShowCallArgChild> {}
export interface ExecutableShowCallArgCall
  extends Executable<'active', ShowCallArgFunction, ShowCallArgVariable> {}
export interface NonExecutableShowCallArgCall
  extends NonExecutable<ShowCallArgChild> {}
export type ShowCallArgChild =
  | ShowCallArgVariable
  | ShowCallArgFunction
  | NonExecutableShowCallArgCall

export type NeedsAlphaConvertVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableConflictFuncUnboundState>
  | WithUiState<VariableConflictCallArgState>
export interface NeedsAlphaConvertFunction
  extends FunctionWithArgBody<
      NeedsAlphaConvertVariable,
      NeedsAlphaConvertChild
    > {}
export interface ExecutableNeedsAlphaConvertCall
  extends Executable<
      'active',
      NeedsAlphaConvertFunction,
      NeedsAlphaConvertVariable
    > {}
export interface NonExecutableNeedsAlphaConvertCall
  extends NonExecutable<NeedsAlphaConvertChild> {}
export type NeedsAlphaConvertChild =
  | NeedsAlphaConvertVariable
  | NeedsAlphaConvertFunction
  | NonExecutableNeedsAlphaConvertCall

export type AlphaConvertDoneVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableConflictResolvedFuncUnboundState>
  | WithUiState<VariableConflictResolvedFuncBoundState>
export interface AlphaConvertDoneFunction
  extends FunctionWithArgBody<
      AlphaConvertDoneVariable,
      AlphaConvertDoneChild
    > {}
export interface ExecutableAlphaConvertDoneCall
  extends Executable<
      'active',
      AlphaConvertDoneFunction,
      AlphaConvertDoneVariable
    > {}
export interface NonExecutableAlphaConvertDoneCall
  extends NonExecutable<AlphaConvertDoneChild> {}
export type AlphaConvertDoneChild =
  | AlphaConvertDoneVariable
  | AlphaConvertDoneFunction
  | NonExecutableAlphaConvertDoneCall

export type BetaReducePreviewBeforeVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableHighlightFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableActiveCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewBeforeFunction
  extends FunctionWithArgBody<
      BetaReducePreviewBeforeVariable,
      BetaReducePreviewBeforeChild
    > {}
export interface ExecutableBetaReducePreviewBeforeCall
  extends Executable<
      'active',
      BetaReducePreviewBeforeFunction,
      BetaReducePreviewBeforeVariable
    > {}
export interface NonExecutableBetaReducePreviewBeforeCall
  extends NonExecutable<BetaReducePreviewBeforeChild> {}
export type BetaReducePreviewBeforeChild =
  | BetaReducePreviewBeforeVariable
  | BetaReducePreviewBeforeFunction
  | NonExecutableBetaReducePreviewBeforeCall

export type BetaReducePreviewAfterVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableActiveFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableHighlightCallArgState>
  | WithUiState<VariableMatchFuncBoundState>
export interface BetaReducePreviewAfterFunction
  extends FunctionWithArgBody<
      BetaReducePreviewAfterVariable,
      BetaReducePreviewAfterChild
    > {}
export interface ExecutableBetaReducePreviewAfterCall
  extends Executable<
      'active',
      BetaReducePreviewAfterFunction,
      BetaReducePreviewAfterVariable
    > {}
export interface NonExecutableBetaReducePreviewAfterCall
  extends NonExecutable<BetaReducePreviewAfterChild> {}
export type BetaReducePreviewAfterChild =
  | BetaReducePreviewAfterVariable
  | BetaReducePreviewAfterFunction
  | NonExecutableBetaReducePreviewAfterCall

export type BetaReducePreviewCrossedVariable =
  | WithUiState<VariableActiveFuncBoundState>
  | WithUiState<VariableRemovedFuncArgState>
  | WithUiState<VariableHighlightFuncUnboundState>
  | WithUiState<VariableRemovedCallArgState>
  | WithUiState<VariableActiveFuncBoundState>
export interface BetaReducePreviewCrossedFunction
  extends FunctionWithArgBody<
      BetaReducePreviewCrossedVariable,
      BetaReducePreviewCrossedChild
    > {}
export interface ExecutableBetaReducePreviewCrossedCall
  extends Executable<
      'active',
      BetaReducePreviewCrossedFunction,
      BetaReducePreviewCrossedVariable
    > {}
export interface NonExecutableBetaReducePreviewCrossedCall
  extends NonExecutable<BetaReducePreviewCrossedChild> {}
export type BetaReducePreviewCrossedChild =
  | BetaReducePreviewCrossedVariable
  | BetaReducePreviewCrossedFunction
  | NonExecutableBetaReducePreviewCrossedCall

export type ExecutableCall =
  | ExecutableInactiveCall
  | ExecutableActiveCall
  | ExecutableShowFuncBoundCall
  | ExecutableShowFuncArgCall
  | ExecutableShowFuncUnboundCall
  | ExecutableShowCallArgCall
  | ExecutableNeedsAlphaConvertCall
  | ExecutableAlphaConvertDoneCall
  | ExecutableBetaReducePreviewBeforeCall
  | ExecutableBetaReducePreviewAfterCall
  | ExecutableBetaReducePreviewCrossedCall

type ExecutableCallWithState<S extends CallStates> = S extends 'inactive'
  ? ExecutableInactiveCall
  : S extends 'active'
    ? ExecutableActiveCall
    : S extends 'showFuncBound'
      ? ExecutableShowFuncBoundCall
      : S extends 'showFuncArg'
        ? ExecutableShowFuncArgCall
        : S extends 'showFuncUnbound'
          ? ExecutableShowFuncUnboundCall
          : S extends 'showCallArg'
            ? ExecutableShowCallArgCall
            : S extends 'needsAlphaConvert'
              ? ExecutableNeedsAlphaConvertCall
              : S extends 'alphaConvertDone'
                ? ExecutableAlphaConvertDoneCall
                : S extends 'betaReducePreviewBefore'
                  ? ExecutableBetaReducePreviewBeforeCall
                  : S extends 'betaReducePreviewAfter'
                    ? ExecutableBetaReducePreviewAfterCall
                    : ExecutableBetaReducePreviewCrossedCall
