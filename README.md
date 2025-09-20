# 🦸‍♂️ Heroe App

Aplicación web desarrollada en **Angular 16** que gestiona héroes en tiempo real usando **Firebase Realtime Database**.

El proyecto permite **crear, listar, editar y eliminar héroes**, reforzando conceptos clave de Angular como:

- Enrutamiento con parámetros dinámicos
- Uso de **Servicios** para centralizar la lógica de negocio
- Conexión a **Firebase Realtime Database**
- Manejo de **Observables** con RxJS
- Alertas amigables con **SweetAlert2**

---

## 📸 Demo

🔗 **Visita la demo en línea:** [Heroe App en Netlify](https://resonant-pixie-e8b4f7.netlify.app/heroes)

- **Listado de héroes**  
  ![HeroeApp Screenshot](https://raw.githubusercontent.com/david99cartagena/HeroeAppRealtimeDatabase/refs/heads/main/media/Screenshot_1.png)

- **Formulario de héroe**  
  ![HeroeApp Screenshot](https://raw.githubusercontent.com/david99cartagena/HeroeAppRealtimeDatabase/refs/heads/main/media/Screenshot_2.png)

---

## 🚀 Tecnologías Utilizadas

- **Angular 16**
- **Firebase Realtime Database**
- **RxJS**
- **TypeScript**
- **SweetAlert2**
- **HTML5 / CSS3**

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│ ├── models/
│ │ └── heroe.model.ts # Modelo de datos de héroe
│ ├── pages/
│ │ ├── heroes/        # Vista listado de héroes
│ │ └── heroe/         # Vista detalle/edición de un héroe
│ ├── services/
│ │ └── heroes.service.ts   # Conexión con Firebase
│ ├── app-routing.module.ts # Configuración de rutas
│ ├── app.component.ts      # Componente raíz
│ └── app.module.ts         # Módulo principal
├── assets/                 # Estilos y recursos estáticos
├── index.html
├── main.ts
├── styles.css
└── _redirects              # Reglas de Netlify para SPA
```

---

## 🔑 Funcionalidades

✅ Listar héroes desde Firebase  
✅ Crear nuevos héroes  
✅ Editar héroes existentes  
✅ Eliminar héroes  
✅ Navegación dinámica con rutas (`/heroes/:id`)  
✅ Confirmaciones y notificaciones con **SweetAlert2**  
✅ Integración con **Firebase Realtime Database**

---

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/HeroeAppRealtimeDatabase.git
```

```bash
cd HeroeAppRealtimeDatabase
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`

---

Basado en el curso de **Fernando Herrera** – [Angular: De Cero a Experto (Edición 2018)](https://www.udemy.com/course/angular-de-cero-a-experto/)
