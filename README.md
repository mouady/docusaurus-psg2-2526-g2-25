# PSG2-2526-G2-25 Petclinic - Documentación

Este sitio web está construido usando [Docusaurus](https://docusaurus.io/), un generador moderno de sitios web estáticos, para documentar el proyecto **PSG2-2526-G2-25 Petclinic**.

## 📋 Información del Proyecto

**Nombre:** PSG2-2526-G2-25 Petclinic  
**Curso:** Proceso Software y Gestión II (PSG2)  
**Institución:** Grado en Ingeniería del Software, Universidad de Sevilla  
**Curso Académico:** 2025/2026  
**Grupo:** G2-25, Laboratorio L2  
**Repositorio Principal:** https://github.com/gii-is-psg2/psg2-2526-g2-25  
**ZenHub Workspace:** https://app.zenhub.com/workspaces/6985a16f5c14bf003077145d

## 👥 Equipo de Desarrollo

- Mohamed Ahmed El Ouadih (@mouady) - mohahmel@alum.us.es
- Manuel Duarte Álvarez (@Madunguin) - manduaalv@alum.us.es
- Candelaria Olmos Payán (@candeop) - canolmpay@alum.us.es
- Enrique Julio Purcell Cichy (@enriquepc004) - enrpurcic@alum.us.es
- José Antonio Reina Navarro (@JoseReina11) - josreinav@alum.us.es

## 🏥 Descripción

Aplicación web de gestión de clínica veterinaria (Petclinic) desarrollada como proyecto académico. Es un fork de spring-petclinic adaptado para enseñar arquitecturas SPA con React, Java y Spring. La aplicación permite gestionar:

- 👨‍⚕️ Veterinarios y especialidades
- 🐕 Dueños de mascotas y mascotas
- 🏥 Clínicas, salas y propietarios de clínicas
- 📅 Visitas y consultas
- 🎫 Tickets

## 🛠️ Stack Tecnológico

### Backend
- Spring Boot 3.1.4
- Java 21
- Maven
- Spring Security con JWT
- H2 Database (in-memory)
- API REST
- Swagger UI

### Frontend
- React 18.2.0
- React Router DOM 6.11.0
- Bootstrap 5.2.3 / Reactstrap
- React Big Calendar
- Swagger UI React

## 🚀 Instalación

```bash
npm install
```

## 💻 Desarrollo Local

```bash
npm start
```

Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin necesidad de reiniciar el servidor.

La documentación estará disponible en: http://localhost:3000/

## 🏗️ Build

```bash
npm run build
```

Este comando genera contenido estático en el directorio `build` que puede ser servido usando cualquier servicio de hosting de contenido estático.

## 📦 Deployment

### GitHub Pages

Usando SSH:

```bash
USE_SSH=true npm run deploy
```

Sin usar SSH:

```bash
GIT_USER=<Tu usuario de GitHub> npm run deploy
```

Este comando construye el sitio web y lo empuja a la rama `gh-pages`.

## 📚 Metodología

- **Gestión:** Metodología Scrum con 4 sprints
- **Herramientas:** ZenHub para gestión de tareas
- **Control de versiones:** Git Flow
- **Commits:** Conventional Commits 1.0.0
- **Testing:** JUnit, Jest, Testing Library
- **Calidad:** JaCoCo, SonarQube
- **Contenedores:** Docker

## 🔗 Enlaces Útiles

- **Backend:** http://localhost:8080
- **Frontend:** http://localhost:3000
- **Swagger UI:** http://localhost:8080/swagger-ui/index.html
- **Repositorio:** https://github.com/gii-is-psg2/psg2-2526-g2-25
- **ZenHub:** https://app.zenhub.com/workspaces/6985a16f5c14bf003077145d

## 📄 Licencia

Este proyecto es parte del curso PSG2 de la Universidad de Sevilla - 2025/2026

---

Built with ❤️ by Grupo G2-25
