export interface TeamRequest {
  teamRequestId: number;
  senderId: number;
  receiverId: number;
  sentDate: string;
  accepted: boolean;
}
