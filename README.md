# web3-dev

## 介绍
总结 web3 开发常用的一些框架、模板，方便以后开发

## 模块
- hardhat 智能合约开发
- backend 后端http服务
- timer 定时器


## 安装依赖
```bash
yarn install
```

###  hardhat 模块
#### 配置助记词等
```bash
    cp ./packages/hardhat/env_sample ./packages/hardhat/.env
    vi ./packages/hardhat/.env # 修改配置字段
```

#### 运行
在项目根目录下运行
```bash
yarn harhat
```
#### 测试
在项目根目录下运行
```bash
yarn harhat:test
```



###  backend
#### 配置助记词等
```bash
    cp ./packages/backend/env_sample ./packages/backend/.env
    vi ./packages/backend/.env # 修改配置字段
```

#### 运行
在项目根目录下运行
```bash
yarn backend
```
#### 测试
在项目根目录下运行
```bash
yarn backend:test
```


###  timer
#### 配置助记词等
```bash
    cp ./packages/timer/env_sample ./packages/timer/.env
    vi ./packages/timer/.env # 修改配置字段
```

#### 运行
在项目根目录下运行
```bash
yarn timer
```
