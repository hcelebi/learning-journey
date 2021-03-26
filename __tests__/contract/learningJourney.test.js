import { Pact, Matchers } from '@pact-foundation/pact';
import { resolve } from 'path';

const provider = new Pact({
	consumer: 'learning-journey',
	provider: 'learning-journey-provider',
	log: resolve(process.cwd(), '.pact', 'logs', 'pact.log'),
	dir: resolve(process.cwd(), '.pact', 'pacts'),
	pactfileWriteMode: 'overwrite',
	logLevel: 'error',
	cors: true
});

beforeAll(async () => {
  await provider.setup();
});
