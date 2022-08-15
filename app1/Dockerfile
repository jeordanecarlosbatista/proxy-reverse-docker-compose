# Começa com uma imagem de Node.js 17.4.0
FROM node:17.4.0

# Especifica o diretório da imagem no qual todos os comandos serão executados
WORKDIR /usr/src/app

# Copia os arquivos do pacote e instala as dependências
COPY package*.json ./
RUN npm install

# Copia todos os arquivos da aplicação para a imagem 
COPY . .

# O comando default a ser executando ao iniciar o contêiner 
CMD ["npm", "start"]
