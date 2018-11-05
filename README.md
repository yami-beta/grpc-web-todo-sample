# grpc-web-todo-sample

## 事前準備

### gRPC-Web protoc plugin をインストール

`protoc` コマンドで gRPC-Web のクライアント用コード生成を行うため必要となる。

```bash
$ git clone https://github.com/grpc/grpc-web.git
$ cd grpc-web
$ sudo make install-plugin
```
