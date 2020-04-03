export interface ServerInboundCreateTableMessage {
  type: "create-table";
  tableName: string;
}

export interface ServerInboundJoinTableMessage {
  type: "join-table";
  tableName: string;
  seatToken: string;
}

export interface ServerInboundLeaveTableMessage {
  type: "leave-table";
  tableName: string;
  seatToken: string;
}

export interface ServerInboundRequestTableStateMessage {
  type: "request-table-state";
  tableName: string;
  seatToken: string;
}

export interface ServerInboundStartGameMessage {
  type: "start-game";
  tableName: string;
  seatToken: string;
}

export type ServerInboundMessage =
  | ServerInboundCreateTableMessage
  | ServerInboundJoinTableMessage
  | ServerInboundLeaveTableMessage
  | ServerInboundRequestTableStateMessage
  | ServerInboundStartGameMessage;

export const isServerInboundMessage = (x: any): x is ServerInboundMessage => {
  return typeof x.type === "string";
};
