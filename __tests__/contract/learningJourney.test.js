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

let learningJourneyService;

beforeAll(async () => {
  await provider.setup();
	console.log('Pact mock server started');

	learningJourneyService = new LearningJourneyService(provider.mockService.baseUrl);
}, 6000);

describe('GET learning journey message', () => {

});


