# 🗂️ TaskHub

TaskHub es una API REST para la gestión de tareas con autenticación mediante **JWT**.  
Permite crear, listar, actualizar y eliminar tareas asociadas a usuarios autenticados.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **Prisma ORM**
- **MySQL**
- **JWT (JSON Web Tokens)**
- **Zod**
- **bcrypt**

---

## ⚙️ Setup local

Sigue estos pasos para levantar el proyecto en local:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Entrar al proyecto
cd tu-repo

# Instalar dependencias
npm install

# Ejecutar migraciones
npx prisma migrate dev

# Levantar el servidor
npm run dev

```

# La API se levantara en 
http://localhost:PUERTO

## 📡 Documentación de la API

La documentación completa de los endpoints está disponible mediante **Swagger**:

👉 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Desde Swagger puedes:

- Ver todos los endpoints disponibles
- Consultar parámetros y respuestas
- Probar la API directamente
- Autorizarte mediante **Bearer Token** en los endpoints protegidos

## ✅ Estado del proyecto

- ✅ Autenticación con JWT
- ✅ CRUD de tareas
- ✅ Validaciones con Zod
- ✅ Tests
- [ ] Deploy

## 👨‍💻 Autor

**Rubén**  
Proyecto personal de backend para práctica y portfolio.  

GitHub: [@rubensosa1608](https://github.com/rubensosa1608)

