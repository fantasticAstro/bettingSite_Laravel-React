-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.16-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for matka365
CREATE DATABASE IF NOT EXISTS `matka365` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `matka365`;

-- Dumping structure for table matka365.dat_bet
CREATE TABLE IF NOT EXISTS `dat_bet` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `updatetime` datetime NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table matka365.dat_bet: ~7 rows (approximately)
DELETE FROM `dat_bet`;
INSERT INTO `dat_bet` (`id`, `updatetime`, `name`, `type`, `value`, `created_at`, `updated_at`) VALUES
	(1, '2023-03-29 05:52:28', 'Single Digit', 'single', 500, '2023-03-28 20:52:46', '2023-03-28 22:14:13'),
	(2, '2023-03-29 05:52:28', 'Jodi Digit', 'jodi', 500, '2023-03-28 20:52:46', '2023-03-28 22:14:13'),
	(3, '2023-03-29 13:22:23', 'Single Patti', 'single_patti', 100, NULL, '2023-03-28 22:14:13'),
	(4, '0000-00-00 00:00:00', 'Double Patti', 'double_patti', 150, NULL, '2023-03-28 22:14:13'),
	(5, '0000-00-00 00:00:00', 'Tripple Patti', 'tripple_patti', 0, NULL, '2023-03-28 22:14:13'),
	(6, '0000-00-00 00:00:00', 'Half Sangam', 'half_Sangam', 0, NULL, '2023-03-28 22:14:14'),
	(7, '0000-00-00 00:00:00', 'Full Sangam', 'full_sangam', 0, NULL, '2023-03-28 22:14:14');

-- Dumping structure for table matka365.dat_market
CREATE TABLE IF NOT EXISTS `dat_market` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `category_id` varchar(50) DEFAULT NULL,
  `open_patti` varchar(10) DEFAULT NULL,
  `close_patti` varchar(10) DEFAULT NULL,
  `status` enum('Y','N') DEFAULT 'N' COMMENT 'finish bet?Y:N',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table matka365.dat_market: ~0 rows (approximately)
DELETE FROM `dat_market`;
INSERT INTO `dat_market` (`id`, `date`, `category_id`, `open_patti`, `close_patti`, `status`) VALUES
	(1, '2023-03-29', '1', '123-5', '1-254', 'N');

-- Dumping structure for table matka365.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table matka365.failed_jobs: ~0 rows (approximately)
DELETE FROM `failed_jobs`;

-- Dumping structure for table matka365.market_category
CREATE TABLE IF NOT EXISTS `market_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `open_time` time NOT NULL DEFAULT '00:00:00',
  `close_time` time NOT NULL DEFAULT '00:00:00',
  `status` enum('Y','N') NOT NULL DEFAULT 'N',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='market infomation';

-- Dumping data for table matka365.market_category: ~5 rows (approximately)
DELETE FROM `market_category`;
INSERT INTO `market_category` (`id`, `name`, `open_time`, `close_time`, `status`, `updated_at`) VALUES
	(1, 'SUPPREME NIGHT', '20:35:00', '22:35:00', 'Y', '2023-03-30 04:47:19'),
	(2, 'MADHUR NIGHT', '21:15:00', '23:15:00', 'Y', '2023-03-29 18:41:10'),
	(5, 'MADHUR DAY', '13:22:00', '14:20:00', 'Y', '2023-03-29 18:38:05'),
	(6, 'SUPREME DAY', '15:35:00', '17:35:00', 'Y', '2023-03-30 04:47:17'),
	(7, 'KALYAN NIGHT', '21:20:00', '23:25:00', 'Y', '2023-03-30 04:47:18');

-- Dumping structure for table matka365.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table matka365.migrations: ~5 rows (approximately)
DELETE FROM `migrations`;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(15, '2014_10_12_000000_create_users_table', 1),
	(16, '2014_10_12_100000_create_password_resets_table', 1),
	(17, '2019_08_19_000000_create_failed_jobs_table', 1),
	(19, '2023_03_29_024348_transaction_log', 2),
	(20, '2023_03_29_031325_score_log', 3);

-- Dumping structure for table matka365.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table matka365.password_resets: ~0 rows (approximately)
DELETE FROM `password_resets`;

-- Dumping structure for table matka365.score_log
CREATE TABLE IF NOT EXISTS `score_log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `updatetime` datetime NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('credit','debit') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'credit',
  `point` int(11) NOT NULL DEFAULT 0,
  `mobile` int(20) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table matka365.score_log: ~3 rows (approximately)
DELETE FROM `score_log`;
INSERT INTO `score_log` (`id`, `updatetime`, `username`, `type`, `point`, `mobile`, `created_at`, `updated_at`) VALUES
	(1, '2023-03-29 06:10:37', '123', 'credit', 12, 0, NULL, NULL),
	(2, '2023-03-29 19:00:09', '123', 'credit', 1254, 0, NULL, NULL),
	(3, '2023-03-29 19:00:39', '123', 'debit', 500, 0, NULL, NULL);

-- Dumping structure for table matka365.transaction_log
CREATE TABLE IF NOT EXISTS `transaction_log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `updatetime` datetime NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `market_id` int(11) NOT NULL,
  `bet_id` int(11) NOT NULL,
  `bet_data` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `points` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table matka365.transaction_log: ~2 rows (approximately)
DELETE FROM `transaction_log`;
INSERT INTO `transaction_log` (`id`, `updatetime`, `username`, `market_id`, `bet_id`, `bet_data`, `points`, `created_at`, `updated_at`) VALUES
	(9, '2023-03-29 03:11:32', 'mickjagger', 1, 2, '[99]', '500', '2023-03-29 03:12:27', '2023-03-29 03:12:28'),
	(11, '2023-03-29 03:18:30', 'mickjagger', 1, 1, '[1,2]', '1000', NULL, NULL);

-- Dumping structure for table matka365.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `regist_date` date DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `full_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` int(11) NOT NULL DEFAULT 0,
  `mobile` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `is_admin` enum('Y','N') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'N',
  `is_block` enum('Y','N') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'N',
  `is_use` enum('Y','N') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Y',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table matka365.users: ~0 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `regist_date`, `email`, `full_name`, `username`, `password`, `point`, `mobile`, `is_admin`, `is_block`, `is_use`, `created_at`, `updated_at`) VALUES
	(1, '2023-03-29', 'admin@gmail.com', 'mickjagger', '123', '25d55ad283aa400af464c76d713c07ad', 160, '123', 'N', 'N', 'Y', '2023-03-29 06:16:13', '2023-03-28 21:10:37'),
	(8, '2023-03-30', 'admin@gmail.com', 'Mick Jagger', 'Alex', '$2y$10$cPv8VZednHJxkICYBdz6UuADiYpOeykljwJrm2vPZ/lcI.BZeGDTm', 0, '18195844935', 'N', 'N', 'Y', NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
