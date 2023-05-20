import compose from 'compose-function'

import { WithStore } from './with-store'
import { WithPersist } from './with-persist'

import { WithTheme } from 'core/providers/with-theme'
import { WithIonic } from 'core/providers/with-ionic'


export const withProviders = compose(WithStore, WithPersist, WithIonic, WithTheme)
