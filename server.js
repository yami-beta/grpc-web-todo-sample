const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = __dirname + "/todo.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// .proto の package が protoDescriptor の key になる
// package を指定しないと service が直接 key になる
const todoProto = protoDescriptor.todo;

const listTodo = (call, callback) => {
  callback(null, {
    todos: [
      { id: 1, text: "todo1", complete: false },
      { id: 2, text: "todo2", complete: false }
    ]
  });
};

const main = () => {
  const server = new grpc.Server();
  server.addService(todoProto.TodoService.service, { listTodo });
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
};

main();
