import { kv } from '@vercel/kv';
import type { Subscriber } from './store';

function configured(){return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)}
export async function saveSubscriber(subscriber:Subscriber){if(!configured())return false;await kv.hset('newsletter:subscribers',{[subscriber.email]:JSON.stringify(subscriber)});return true}
export async function saveAlert(userId:string,alert:unknown){if(!configured())return false;await kv.set(`alert:${userId}`,alert);return true}
export async function saveApplication(application:unknown,id:string){if(!configured())return false;await kv.set(`application:${id}`,application);return true}
export async function saveListing(listing:unknown,id:string){if(!configured())return false;await kv.set(`listing:${id}`,listing);return true}
