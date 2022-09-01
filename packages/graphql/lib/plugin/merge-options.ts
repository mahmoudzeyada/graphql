import { isString } from '@nestjs/common/utils/shared.utils';

export interface PluginOptions {
  typeFileNameSuffix?: string | string[];
  introspectComments?: boolean;
  autoRegisterEnums?: boolean;
}

const defaultOptions: PluginOptions = {
  typeFileNameSuffix: ['.input.ts', '.args.ts', '.entity.ts', '.model.ts'],
  introspectComments: false,
  autoRegisterEnums: false,
};

export const mergePluginOptions = (
  options: Record<string, any> = {},
): PluginOptions => {
  if (isString(options.typeFileNameSuffix)) {
    options.typeFileNameSuffix = [options.typeFileNameSuffix];
  }
  return {
    ...defaultOptions,
    ...options,
  };
};
