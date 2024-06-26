# Kakiusp

### Frontend

Navegue até a pasta chamada Frontend

```bash
npm install
```

```bash
ng serve
```

### Rodando o Backend

Visual Studio Code

- Abra o VSCode e instale as dependências/extensões do C#
- Instale o SDK do .NET no windows
- Abra a solução no explorer
    
    ![Untitled](https://github.com/mujapira/kakiusp/assets/89225210/38dc6130-c166-4842-a531-a57c0049ffe6)
    

Visual Studio Community

- Open a project or a solution
- Navegue até o local da .sln C:\Users\SEUNOME\SEUCAMINHO\Kakiusp\BackEnd

### Banco de dados

- Instale o XAMP
- Inicie os serviços do Apache e o MySQL e abra o PHPMyAdmin

![Untitled](https://github.com/mujapira/kakiusp/assets/89225210/c83828a4-70f3-4dda-8448-05e89c0fbc53)

- Crie um banco com o seguinte nome

![Untitled](https://github.com/mujapira/kakiusp/assets/89225210/77762b1e-9269-45e8-9501-269947a000f6)

- Importe o banco, o arquivo .sql está na pasta DB

![Untitled](https://github.com/mujapira/kakiusp/assets/89225210/71f09b85-cbb0-4b12-ad1a-74fa5a75151b)

→ Povoe a tabela de users e de people

```sql
INSERT INTO `people` (`id`, `name`, `date_of_birth`, `gender`, `email`, `phone_number`, `address`, `role`) VALUES
(1, 'Mauricio', '1997-10-15', 'M', 'mauricio@gmail.com', '11977222211', 'Alameda da onça', 'AD');
```

### Possíveis erros e pontos notáveis

Verifique em que porta o seu backend está sendo hospedado, se atente se é **http** ou **https**!

```tsx
//pasta environments
export const environment = {
    production: false,
    apiUrl: 'http://localhost:5189/api',
};
```
