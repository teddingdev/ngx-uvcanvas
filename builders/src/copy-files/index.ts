import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { promises as fs } from 'fs';
import { resolve } from 'path';

interface Options extends JsonObject {
  source: string;
  destination: string;
}

export default createBuilder(copyFileBuilder);

async function copyFileBuilder(
  options: Options,
  context: BuilderContext
): Promise<BuilderOutput> {
  console.log('source      : ' + resolve(options.source));
  console.log('destination : ' + resolve(options.destination));
  context.reportStatus(
    `Copying ${resolve(options.source)} to ${resolve(options.destination)}.`
  );
  try {
    await fs.cp(options.source, options.destination, { recursive: true });
  } catch (err) {
    context.logger.error('Failed to copy file.');
    return {
      success: false,
      error: (err as Error).message,
    };
  }

  context.reportStatus('Done.');
  return { success: true };
}
