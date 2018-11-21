# grpc-web-todo-sample

## 事前準備

### gRPC-Web protoc plugin をインストール

`protoc` コマンドで gRPC-Web のクライアント用コード生成を行うため必要となる。

```bash
$ git clone https://github.com/grpc/grpc-web.git
$ cd grpc-web
$ sudo make install-plugin
```

## サーバ側メモ

[grpc](https://www.npmjs.com/package/grpc) と [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) の2つの package がある。
前者は C-based Client and Server で、後者は Pure JavaScript Client (Experimental) の package になっている。
