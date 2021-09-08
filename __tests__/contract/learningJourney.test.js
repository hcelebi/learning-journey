const {Pact, Matchers} = require('@pact-foundation/pact');
const {resolve} = require('path');
const {LearningJourneyService} = require(
    '../../service/LearningJourneyService');

const {string} = Matchers;

/**
 *
 * Pact provider object for all interactions with pact mock server
 *
 * @type {Pact}
 */
const provider = new Pact({
  consumer: 'helloworld-demo-consumer',
  provider: 'helloworld-demo-provider',
  log: resolve(process.cwd(), '.pact', 'logs', 'pact.log'),
  dir: resolve(process.cwd(), '.pact', 'pacts'),
  pactfileWriteMode: 'overwrite',
  logLevel: 'error',
  cors: true
});

/**
 * learning journey rest client service
 */
let learningJourneyService;

/**
 * Before all tests cases init test env.
 */
beforeAll(async () => {

  /**
   * Start pact mock server instance
   */
  await provider.setup();

  console.log('Pact mock server started');

  /**
   * Init rest client
   * @type {LearningJourneyService}
   */
  learningJourneyService = new LearningJourneyService(
      provider.mockService.baseUrl);

}, 6000);

/**
 * After all tests run, clean and shutdown test env
 */
afterAll(async () => {

  /**
   * After all tests run, finalize and shutdown pact mock server instance
   * and check if all tests are passed!
   */
  await provider.finalize();

}, 600000);

describe('[GET] hello world message', () => {

  beforeEach(async () => {

    await provider.addInteraction({
      state: 'consumer requests a message from provider',
      uponReceiving: 'Hello world message',
      withRequest: {
        method: 'GET',
        path: '/message'
      },
      willRespondWith: {
        status: 200,
        body: {
          message: string('Hello world')
        }
      }
    })
  });

  it('Should return expected response', async () => {
    const message = await learningJourneyService.getMessage();

    expect(message).not.toBeUndefined();
    expect(message.status).toBe('ok');
    expect(message.messageText).toBe('Hello world');
  });

  afterEach(async () => {
    await provider.verify();
  });
});
