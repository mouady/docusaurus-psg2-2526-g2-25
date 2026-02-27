---
sidebar_position: 1
---

# Introducción

Bienvenido a la documentación del proyecto **PSG2-2526-G2-25 Petclinic** 🏥🐾

## 📖 ¿Qué es Petclinic?

Petclinic es una **aplicación web de gestión de clínica veterinaria** desarrollada como proyecto académico en el contexto de la asignatura **Proceso Software y Gestión II (PSG2)** del Grado en Ingeniería del Software de la Universidad de Sevilla.

Este proyecto es un fork del reconocido **spring-petclinic**, adaptado específicamente para enseñar y aplicar arquitecturas modernas de **Single Page Application (SPA)** utilizando:

- **Backend:** Spring Boot, Java 21, Spring Security con JWT
- **Frontend:** React 18.2.0, React Router, Bootstrap/Reactstrap
- **Base de datos:** H2 (in-memory)
- **Documentación API:** Swagger UI

## 👥 Equipo de Desarrollo

El proyecto está siendo desarrollado por el **Grupo G2-25** del Laboratorio L2, integrado por 5 miembros:

- **Mohamed Ahmed El Ouadih** (@mouady) - mohahmel@alum.us.es
- **Manuel Duarte Álvarez** (@Madunguin) - manduaalv@alum.us.es
- **Candelaria Olmos Payán** (@candeop) - canolmpay@alum.us.es
- **Enrique Julio Purcell Cichy** (@enriquepc004) - enrpurcic@alum.us.es
- **José Antonio Reina Navarro** (@JoseReina11) - josreinav@alum.us.es

## 🎯 Funcionalidades Principales

La aplicación permite gestionar todos los aspectos de una clínica veterinaria:

### Gestión de Pacientes
- 👤 **Dueños:** Registro y gestión de propietarios de mascotas
- 🐕 **Mascotas:** Gestión de información de animales (tipos, nombres, edades)

### Gestión Médica
- 👨‍⚕️ **Veterinarios:** Gestión de profesionales y sus especialidades
- 📅 **Consultas:** Programación y seguimiento de citas
- 🏥 **Visitas:** Registro de visitas médicas y tratamientos
- 🎫 **Tickets:** Sistema de tickets para gestión administrativa

### Gestión de Instalaciones
- 🏢 **Clínicas:** Gestión de múltiples clínicas
- 🚪 **Salas:** Gestión de salas de consulta
- 👔 **Propietarios de Clínicas:** Administración de propietarios y permisos

## 🛠️ Configuración del Entorno

### Requisitos Previos

- **Node.js** versión 20.0 o superior
- **Java** 21
- **Maven** para gestión de dependencias del backend
- **Git** para control de versiones

### Instalación del Backend

```bash
# Clonar el repositorio principal
git clone https://github.com/gii-is-psg2/psg2-2526-g2-25.git
cd psg2-2526-g2-25

# Compilar y ejecutar el backend
./mvnw spring-boot:run
```

El backend estará disponible en: **http://localhost:8080**
Swagger UI en: **http://localhost:8080/swagger-ui/index.html**

### Instalación del Frontend

```bash
# Navegar al directorio frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

El frontend estará disponible en: **http://localhost:3000**

## 🔗 Enlaces Importantes

- **Repositorio GitHub:** https://github.com/gii-is-psg2/psg2-2526-g2-25
- **Backend Local:** http://localhost:8080
- **Frontend Local:** http://localhost:3000
- **API Documentation:** http://localhost:8080/swagger-ui/index.html
