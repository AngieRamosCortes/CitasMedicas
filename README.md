# Back
# Sistema de Citas Medicas para ECI Salud Vital

## Arquitectura del Proyecto

El sistema sigue una arquitectura de microservicios con:

- **Backend**: Servicio Spring Boot con:
  - Controladores REST
  - Servicios de negocio
  - Repositorio MongoDB
- **Base de datos**: MongoDB (implementado con Cosmos DB en Azure)

## Tecnologías Utilizadas

- Backend:
  - Java 17
  - Spring Boot 3.x
  - Spring Data MongoDB
  - Maven
  - JUnit 5 + Mockito para pruebas
- Frontend:
  - React 18
  - Axios para llamadas HTTP
  - Bootstrap para estilos
- DevOps:
  - GitHub Actions para CI/CD
  - Azure App Service para despliegue
  - Azure Cosmos DB (MongoDB API)

## Cómo Ejecutar el Proyecto

### Backend

1. Clonar el repositorio
2. Configurar MongoDB en `application.properties`
3. Ejecutar:
mvn spring-boot:run

##Diagramas:
![image](https://github.com/user-attachments/assets/f0944d4e-ab02-4a94-b147-342c071f1686)
![image](https://github.com/user-attachments/assets/767b331d-54b2-4446-ae78-da715215ef8e)



