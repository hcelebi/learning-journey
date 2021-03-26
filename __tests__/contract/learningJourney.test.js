const { Pact, Matchers } = require('@pact-foundation/pact');
const { resolve } = require('path');

const { string } = Matchers;

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

describe('GET learning journey message', async () => {

	beforeEach(async ()=>{
		await provider.addInteraction({
			state: 'default state',
			uponReceiving: 'Hello world message',
			withRequest: {
				method: 'GET',
				path: '/message'
			},
			willRespondWith : {
				status: 200,
				body: {
					message: string('Hello world')
				}
			}
		})
	});

	it('Should return expected response', async ()=>{
		const response = learningJourneyService.getMessage();
		expect(response).not.toBeUndefined();
	});
});


