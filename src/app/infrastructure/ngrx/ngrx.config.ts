import { Type } from "@angular/core";

import { PropertiesEffects } from "@app/properties/usecases/store/properties.effects";

export const combinedEffects: Array<Type<unknown>> = [PropertiesEffects];
