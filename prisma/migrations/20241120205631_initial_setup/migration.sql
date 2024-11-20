-- CreateTable
CREATE TABLE `comentarios` (
    `id_comentario` INTEGER NOT NULL AUTO_INCREMENT,
    `id_resena` INTEGER NULL,
    `id_usuario` INTEGER NULL,
    `comentario` TEXT NULL,
    `fecha_comentario` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_resena`(`id_resena`),
    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id_comentario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generos` (
    `id_genero` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_genero` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,

    PRIMARY KEY (`id_genero`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `listas_de_seguimiento` (
    `id_lista` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NULL,
    `nombre_lista` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,

    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id_lista`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peliculas` (
    `id_pelicula` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `sinopsis` TEXT NULL,
    `duracion` INTEGER NULL,
    `fecha_estreno` DATE NULL,
    `director` VARCHAR(100) NULL,
    `pais_origen` VARCHAR(100) NULL,
    `calificacion_promedio` DECIMAL(3, 2) NULL DEFAULT 0.00,
    `id_genero` INTEGER NULL,

    INDEX `id_genero`(`id_genero`),
    PRIMARY KEY (`id_pelicula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peliculas_genero` (
    `id_pelicula` INTEGER NOT NULL,
    `id_genero` INTEGER NOT NULL,

    INDEX `id_genero`(`id_genero`),
    PRIMARY KEY (`id_pelicula`, `id_genero`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peliculas_lista` (
    `id_lista` INTEGER NOT NULL,
    `id_pelicula` INTEGER NOT NULL,

    INDEX `id_pelicula`(`id_pelicula`),
    PRIMARY KEY (`id_lista`, `id_pelicula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recomendaciones` (
    `id_recomendacion` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NULL,
    `id_pelicula` INTEGER NULL,
    `id_serie` INTEGER NULL,
    `mensaje_recomendacion` TEXT NULL,

    INDEX `id_pelicula`(`id_pelicula`),
    INDEX `id_serie`(`id_serie`),
    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id_recomendacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resenas` (
    `id_resena` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NULL,
    `id_pelicula` INTEGER NULL,
    `id_serie` INTEGER NULL,
    `comentario` TEXT NULL,
    `calificacion` INTEGER NULL,
    `fecha_resena` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_pelicula`(`id_pelicula`),
    INDEX `id_serie`(`id_serie`),
    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id_resena`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `series` (
    `id_serie` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `sinopsis` TEXT NULL,
    `num_temporadas` INTEGER NULL,
    `fecha_estreno` DATE NULL,
    `director` VARCHAR(100) NULL,
    `pais_origen` VARCHAR(100) NULL,
    `calificacion_promedio` DECIMAL(3, 2) NULL DEFAULT 0.00,
    `id_genero` INTEGER NULL,

    INDEX `id_genero`(`id_genero`),
    PRIMARY KEY (`id_serie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `series_lista` (
    `id_lista` INTEGER NOT NULL,
    `id_serie` INTEGER NOT NULL,

    INDEX `id_serie`(`id_serie`),
    PRIMARY KEY (`id_lista`, `id_serie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `contraseña` VARCHAR(255) NOT NULL,
    `fecha_registro` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `rol` ENUM('admin', 'usuario normal') NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
