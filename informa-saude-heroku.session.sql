-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Jun-2022 às 00:50
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `informasaude`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `report`
--

CREATE TABLE `report` (
  `ID_REPORT` int(11) NOT NULL,
  `REPORTER` varchar(128) NOT NULL,
  `LATITUDE` decimal(10,8) NOT NULL,
  `LONGITUDE` decimal(11,8) NOT NULL,
  `REPORT_TYPE` varchar(50) NOT NULL,
  `CONFIRMED` tinyint(1) NOT NULL,
  `REPORT_DATE` date NOT NULL current_timestamp(),
  `ACTIVE` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `report`
--

INSERT INTO `report` (`ID_REPORT`, `REPORTER`, `LATITUDE`, `LONGITUDE`, `REPORT_TYPE`, `CONFIRMED`, `REPORT_DATE`, `ACTIVE`) VALUES
(1, 'SAMAEL@TESTE.COM', '10.12312300', '-11.12313000', 'COVID-19', 1, '2022-06-08', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`ID_REPORT`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `report`
--
ALTER TABLE `report`
  MODIFY `ID_REPORT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;