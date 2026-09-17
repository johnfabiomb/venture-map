/**
 * Stripe publishable key for the booking platform.
 *
 * Publishable keys are safe in client code by design — they can only create payment
 * intents the server has already authorised. It lives here rather than inline in a
 * component so the two pay surfaces (the booking pay link and the invoice share link)
 * cannot drift onto different keys.
 */
export const STRIPE_PK =
  'pk_live_51ShRJTAXI0tdCXi3HuEvh9PuIVMFTjqRlMQwsg8pqMlhACOXGKAiATxj9MzW268hs9RV6RvCb5FP1bIFHuNlZkBG007LHcSnOB';
