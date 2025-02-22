/* eslint-disable import/unambiguous */

/*
    ┌─────────────────────────────────────────────────────────────────────────┐
    │ Helper types                                                            │
    └─────────────────────────────────────────────────────────────────────────┘
*/

declare type AsyncFunction<T = unknown, R = unknown> = (arg: T) => Promise<R>
declare type SyncFunction<T = unknown, R = unknown> = (arg: T) => R
declare type AnyFunction<T = unknown, R = unknown> = AsyncFunction<T, R> | SyncFunction<T, R>
