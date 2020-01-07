-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 08, 2020 at 02:18 AM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tray`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `accounts1`
--

CREATE TABLE `accounts1` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts1`
--

INSERT INTO `accounts1` (`id`, `username`, `password`) VALUES
(1, 'deva', 'lauda'),
(2, 'divya', 'hvhjgj'),
(3, '113', '123');

-- --------------------------------------------------------

--
-- Table structure for table `admin_table`
--

CREATE TABLE `admin_table` (
  `user_id` int(11) NOT NULL,
  `canteen_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `canteens`
--

CREATE TABLE `canteens` (
  `canteen_id` int(11) NOT NULL,
  `canteen_name` varchar(50) NOT NULL,
  `table_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `canteens`
--

INSERT INTO `canteens` (`canteen_id`, `canteen_name`, `table_name`) VALUES
(1, 'Rajeev Canteen', 'rajeev_item_list'),
(2, 'Cautley Canteen', 'cautley_item_list');

-- --------------------------------------------------------

--
-- Table structure for table `cautley_item_list`
--

CREATE TABLE `cautley_item_list` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cautley_item_list`
--

INSERT INTO `cautley_item_list` (`item_id`, `item_name`, `item_price`) VALUES
(1, 'dosa', 59),
(2, 'maggie', 100);

-- --------------------------------------------------------

--
-- Table structure for table `group_members`
--

CREATE TABLE `group_members` (
  `group_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `is_admin` int(255) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_members`
--

INSERT INTO `group_members` (`group_id`, `member_id`, `is_admin`) VALUES
(9, 3, 1),
(10, 3, 1),
(11, 3, 1),
(12, 3, 1),
(13, 3, 1),
(14, 3, 1),
(15, 3, 1),
(16, 3, 1),
(17, 3, 1),
(18, 3, 1),
(19, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `group_table`
--

CREATE TABLE `group_table` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `group_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_table`
--

INSERT INTO `group_table` (`group_id`, `group_name`, `group_code`) VALUES
(8, 'lauda', 305893),
(9, 'divyanshu', 877994),
(10, 'bs hgana hai', 270956),
(11, 'sfddsds', 740412),
(12, 'srtrtdgf', 604076),
(13, 'dsdvs', 854322),
(14, 'asddsvrs', 977874),
(15, 'dsdvces', 715336),
(16, 'cvdsvc', 609302),
(17, 'fdvfv', 676839),
(18, 'vdsvd', 762454),
(19, 'vjhgjhm', 887460);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_hash` varchar(50) NOT NULL,
  `order_name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) DEFAULT NULL,
  `canteen_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_hash`, `order_name`, `user_id`, `group_id`, `canteen_id`, `item_id`) VALUES
(1, 'a0fa4l', '', 3, 9, 0, 0),
(2, 'o3jzh6', '', 3, 10, 0, 0),
(3, 'k51rlb', '', 3, 11, 0, 0),
(4, 'y5nm8m', '', 3, 12, 0, 0),
(5, 'ugzou7', '', 3, 13, 0, 0),
(6, '0yl3r3', '', 3, 14, 0, 0),
(7, 'qzc3ha', '', 3, 15, 0, 0),
(8, 'bhmpxn', '', 3, 16, 0, 0),
(9, 'qj2abl', '', 3, 17, 0, 0),
(10, 'i6jsh3', '', 3, 18, 0, 0),
(11, '6vro8c', '', 3, 19, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders_content`
--

CREATE TABLE `orders_content` (
  `order_id` int(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `canteen_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rajeev_item_list`
--

CREATE TABLE `rajeev_item_list` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rajeev_item_list`
--

INSERT INTO `rajeev_item_list` (`item_id`, `item_name`, `item_price`) VALUES
(1, 'idli', 40),
(2, 'maggie', 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts1`
--
ALTER TABLE `accounts1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `canteens`
--
ALTER TABLE `canteens`
  ADD PRIMARY KEY (`canteen_id`);

--
-- Indexes for table `cautley_item_list`
--
ALTER TABLE `cautley_item_list`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `group_table`
--
ALTER TABLE `group_table`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD UNIQUE KEY `order_hash` (`order_hash`);

--
-- Indexes for table `rajeev_item_list`
--
ALTER TABLE `rajeev_item_list`
  ADD PRIMARY KEY (`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts1`
--
ALTER TABLE `accounts1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `canteens`
--
ALTER TABLE `canteens`
  MODIFY `canteen_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `cautley_item_list`
--
ALTER TABLE `cautley_item_list`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `group_table`
--
ALTER TABLE `group_table`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `rajeev_item_list`
--
ALTER TABLE `rajeev_item_list`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
