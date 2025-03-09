declare interface iRumContext {
  app: string;
  namespace: string;
  name: string;
  actionId?: string;
}
declare type tPublishEvent = (key: string, value: string | number) => void;
declare interface iSpecificRecordFunctions {
  publishCounter: tPublishEvent;
  publishString: tPublishEvent;
  publishTimer: tPublishEvent;
}
// ---------------------------------------------------------------------------------------
/**
 * The type of meta data to record
 */
type iRumMetaData = Record<string, string>;
// ---------------------------------------------------------------------------------------
/**
 * The type of event to record
 */
type tEventType =
  | 'counter'
  | 'string'
  | 'timer'
  | 'counterMonitor'
  | 'stringMonitor'
  | 'timerMonitor';
// ---------------------------------------------------------------------------------------
/**
 * A fake rum interface for development
 */
interface iFakeRum {
  recordEvent: (eventType: string, eventObj: unknown) => void;
}
