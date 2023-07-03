class ChatClient {
	constructor(id, inMsgQ, outMsgQ) {
		this.id = id;
		this.inboundMsgQ = inMsgQ;
		this.outbondMsgQ = outMsgQ;
	}
	sendMsg(msg) {
		if (msg === undefined || msg === null) return;
		console.log(new Date().toISOString() + " [" + this.id + "]: " + msg);
		this.outbondMsgQ.push(msg);
	}
	readMsg() {
		if (this.inboundMsgQ.isEmpty()) return;
		var msg = this.inboundMsgQ.pop();
		console.log(new Date().toISOString() + " [" + this.id + "]: " + "<<");
	}
}

export default ChatClient;
