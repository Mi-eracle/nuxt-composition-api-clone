export type {
  AsyncComponent,
  Component,
  ComponentComputedOptions,
  ComponentCustomOptions,
  ComponentCustomProperties,
  ComponentCustomProps,
  ComponentInstance,
  ComponentMethodOptions,
  ComponentOptions,
  ComponentPropsOptions,
  ComponentPublicInstance,
  ComputedGetter,
  ComputedOptions,
  ComputedRef,
  ComputedSetter,
  CreateComponentPublicInstance,
  CreateElement,
  CustomRefFactory,
  DebuggerEvent,
  Data,
  DebuggerEventExtraInfo,
  DebuggerOptions,
  DeepReadonly,
  Directive,
  DirectiveBinding,
  DirectiveFunction,
  DirectiveHook,
  DirectiveModifiers,
  DirectiveOptions,
  EffectScope,
  ExtractDefaultPropTypes,
  ExtractPropTypes,
  FunctionDirective,
  FunctionalComponentOptions,
  InferDefault,
  InferDefaults,
  InjectionKey,
  NotUndefined,
  ObjectDirective,
  PluginFunction,
  PluginObject,
  PropOptions,
  PropsWithDefaults,
  PropType,
  ReactiveFlags,
  Ref,
  RefUnwrapBailTypes,
  RenderContext,
  SetupContext,
  SetupFunction,
  ShallowReactive,
  ShallowRef,
  ShallowUnwrapRef,
  ToRef,
  ToRefs,
  TrackOpTypes,
  TriggerOpTypes,
  UnwrapNestedRefs,
  UnwrapRef,
  VNode,
  VNodeChildren,
  VNodeChildrenArrayContents,
  VNodeComponentOptions,
  VNodeData,
  VNodeDirective,
  VueConstructor,
  WatchCallback,
  WatchEffect,
  WatchHandler,
  WatchOptions,
  WatchOptionsBase,
  WatchOptionsWithHandler,
  WatchSource,
  WatchStopHandle,
  WritableComputedOptions,
  WritableComputedRef,
} from 'vue'

export { defineComponent } from './component'

export {
  computed,
  customRef,
  del,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  isProxy,
  isShallow,
  isReactive,
  isReadonly,
  isRef,
  markRaw,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  provide,
  proxyRefs,
  reactive,
  readonly,
  ref,
  set,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  useAttrs,
  useCssModule as useCSSModule,
  useCssModule,
  useCssVars,
  useSlots,
  version,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from 'vue'

export const warn = () => console.warn('`warn` is not exported by Vue 2.7')
export const createApp = () =>
  console.warn('`createApp` is not exported by Vue 2.7')
export const createRef = () =>
  console.warn('`createRef` is not exported by Vue 2.7')
export const defineAsyncComponent = () =>
  console.warn('`defineAsyncComponent` is not exported by Vue 2.7')
export const isRaw = () => console.warn('`isRaw` is not exported by Vue 2.7')
