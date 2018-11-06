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
const todoProto = grpc.loadPackageDefinition(packageDefinition).todo;

const main = () => {
  const client = new todoProto.TodoService(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );
  client.listTodo(null, function(err, response) {
    console.log(response);
  });
};

main();
