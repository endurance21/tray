-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 08, 2020 at 12:50 AM
-- Server version: 5.7.28-0ubuntu0.19.04.2
-- PHP Version: 7.2.25-1+ubuntu19.04.1+deb.sury.org+1

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
(2, 'divya', 'hvhjgj'),
(3, '113', '123'),
(4, 'amit', 'hello'),
(5, 'qweq', 'qwe'),
(6, '312', 'asd'),
(7, 'hello', '123'),
(8, '1234', '1234'),
(24, 'sawfd', 'asdf'),
(26, 'asdjf', 'asdf'),
(35, 'asd', 'asf'),
(36, 'awsf', 'asdf'),
(37, 'sdfa', 'sdfa'),
(39, 'endurance21', 'hello'),
(51, '12', 'asdf');

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
(13, 3, 1),
(14, 3, 1),
(15, 3, 1),
(16, 3, 1),
(17, 3, 1),
(18, 3, 1),
(19, 3, 1),
(20, 3, 1),
(21, 3, 1),
(22, 3, 1),
(23, 3, 1),
(24, 3, 1),
(25, 3, 1),
(26, 3, 1),
(27, 3, 1),
(28, 3, 1),
(29, 3, 1),
(30, 3, 1),
(31, 3, 1),
(32, 3, 1),
(33, 3, 1),
(34, 3, 1),
(35, 3, 1),
(36, 3, 1),
(37, 3, 1),
(37, 3, 0),
(37, 3, 0),
(25, 3, 0),
(38, 3, 1),
(39, 3, 1),
(39, 4, 0),
(40, 4, 1),
(39, 4, 0),
(41, 4, 1),
(42, 3, 1),
(43, 3, 1),
(44, 3, 1),
(45, 3, 1),
(46, 4, 1),
(47, 4, 1),
(48, 4, 1),
(49, 4, 1),
(50, 3, 1),
(51, 3, 1),
(52, 3, 1),
(53, 3, 1),
(54, 3, 1),
(55, 3, 1),
(56, 3, 1),
(57, 3, 1),
(58, 3, 1),
(59, 3, 1),
(60, 3, 1),
(61, 3, 1),
(62, 3, 1),
(63, 3, 1),
(64, 3, 1),
(65, 3, 1),
(66, 3, 1),
(67, 3, 1),
(68, 3, 1),
(69, 3, 1),
(70, 3, 1),
(71, 3, 1);

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
(1, 'hello', 740846),
(2, 'hello2', 437317),
(3, 'hello2', 785226),
(4, 'hello23', 491842),
(5, 'hello23', 192453),
(6, 'hello23', 394797),
(7, 'hello23', 129697),
(8, 'hello23', 607460),
(9, 'hello23', 840159),
(10, 'hello23', 374624),
(11, 'hello23', 174863),
(12, 'hello23', 943236),
(13, 'hello23', 404306),
(14, 'hello2', 366988),
(15, 'hello2987', 287798),
(16, 'oiuh', 968124),
(17, 'ASD', 275979),
(18, 'ASD', 993691),
(19, 'ASD', 890413),
(20, 'SDF', 128342),
(21, 'SDF', 284082),
(22, 'SDF', 130324),
(23, 'SDF', 783463),
(24, 'SDF', 940685),
(25, 'SDF', 552987),
(26, 'SDF', 137040),
(27, 'SDF', 505644),
(28, 'SDF', 788347),
(29, 'SDF', 822087),
(30, 'SDF', 620475),
(31, 'SDF', 727599),
(32, 'SDF', 346792),
(33, 'SDF', 540568),
(34, 'SDF', 218326),
(35, 'iuyt', 385853),
(36, 'sff', 467066),
(37, 'asfd', 560496),
(38, 'asd', 945493),
(39, 'divyanshu', 837565),
(40, 'amit', 651741),
(41, 'amit 2', 609363),
(42, 'AMIT2', 553039),
(43, 'HELLOSALDKSFJ', 926820),
(44, 'asdfsdf', 720120),
(45, 'DEVA KI PARTY', 386800),
(46, 'hello', 159224),
(47, 'hello', 779592),
(48, 'DIVUALKDASDF', 538836),
(49, 'asdfasd', 125385),
(50, 'asdvasdfv', 300566),
(51, 'zxcvzxc', 614402),
(52, '', 616957),
(53, 'MYGROUP', 105797),
(54, 'ASFASDFASD', 374696),
(55, 'sd', 128238),
(56, 'sdf', 469022),
(57, 'sdfa', 743603),
(58, 'asdfasdf', 963939),
(59, 'asdfas', 400977),
(60, 'asdfasdfsadf', 336331),
(61, 'asdfasdf', 430363),
(62, 'asdfasdf', 174664),
(63, 'asdfasdf', 859627),
(64, 'asdffasddfffffffffff', 420709),
(65, 'sdsssssssssss', 667264),
(66, 'aaaaaaaaaaaaaaa', 395501),
(67, 'aaaaaaaaaaaaaaaaaaaaaaaa', 306596),
(68, 'asdfasd', 614291),
(69, 'asdddefa', 671594),
(70, 'bbbbbbbbbbbb', 264234),
(71, 'asdfasdfsad', 925640);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_hash` varchar(50) DEFAULT NULL,
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
(1, '', '', 0, NULL, 0, 0),
(5, 'order_hash', '', 0, NULL, 0, 0),
(17, NULL, '', 0, NULL, 0, 0),
(18, NULL, '', 0, NULL, 0, 0),
(19, NULL, '', 0, NULL, 0, 0),
(20, NULL, '', 0, NULL, 0, 0),
(21, NULL, '', 0, NULL, 0, 0),
(22, NULL, '', 0, NULL, 0, 0),
(23, NULL, '', 0, NULL, 0, 0),
(24, NULL, '', 0, NULL, 0, 0),
(25, NULL, '', 0, NULL, 0, 0),
(26, 'jkv', 'helo', 12, 763, 93, 4),
(28, '4319.879163617069', 'helo', 12, 763, 93, 4),
(29, '5327.1909264220185', 'helo', 12, 763, 93, 4),
(30, '1925.1404318208042', 'helo', 12, 763, 93, 4),
(31, 'gdmt6e', 'helo', 12, 763, 93, 4),
(32, 'ftc0e9', 'helo', 12, 763, 93, 4),
(33, '40w2t6', 'helo', 12, 763, 93, 4),
(34, 'o6z42v', 'helo', 12, 763, 93, 4),
(35, 'mpmdr5', 'helo', 12, 763, 93, 4),
(36, '6cmktd', 'helo', 12, 763, 93, 4),
(37, 'awssbf', 'helo', 12, 763, 93, 4),
(38, 'ss9tom', 'helo', 12, 763, 93, 4),
(39, '4saekf', 'helo', 12, 763, 93, 4),
(40, 'gaktqo', 'helo', 12, 763, 93, 4),
(41, 'f5au4l', 'helo', 12, 763, 93, 4),
(42, 'deueud', 'helo', 12, 763, 93, 4),
(43, '3wal3x', 'helo', 12, 763, 93, 4),
(44, '4i7lsc', 'helo', 12, 763, 93, 4),
(45, '0jigrl', 'helo', 12, 763, 93, 4),
(46, 'qsfane', 'helo', 12, 763, 93, 4),
(47, 'zv9f4i', 'helo', 12, 763, 93, 4),
(48, '1njvpg', 'helo', 12, 763, 93, 4),
(49, '14fzb3', 'helo', 12, 763, 93, 4),
(50, 'i3v65s', 'helo', 12, 763, 93, 4),
(51, '2esml6', 'helo', 12, 763, 93, 4),
(52, '6anvk7', 'helo', 12, 763, 93, 4),
(53, 'riwvj3', 'asdf', 3, 39, 0, 0),
(54, 'ms8cjm', 'asdf', 3, 39, 0, 0),
(55, '7ktis1', 'cold drinks', 3, 45, 4, 0),
(56, '9zn17s', '', 3, 51, 0, 0),
(57, 'sr5800', '', 3, 53, 0, 0),
(58, 'huacuk', '', 3, 54, 3, 0),
(59, 'kw35to', '', 3, 54, 3, 0),
(60, 'wci334', '', 3, 54, 0, 0),
(61, '633x2a', '', 3, 54, 0, 0),
(62, 'og0upf', '', 3, 54, 0, 0),
(63, 'n3nrqr', '', 3, 54, 0, 0),
(64, '2o21kf', '', 3, 54, 0, 0),
(65, 'n322xe', '', 3, 54, 0, 0),
(66, 'fc4dq2', '', 3, 54, 0, 0),
(67, 'nswuy1', '', 3, 54, 0, 0),
(68, '0zwd8d', '', 3, 54, 0, 0),
(69, 'i559y4', '', 3, 54, 0, 0),
(70, 'rouvca', '', 3, 54, 0, 0),
(71, '68vr9x', '', 3, 55, 0, 0),
(72, 'vhfrwr', '', 3, 56, 0, 0),
(73, '5bd93z', '', 3, 57, 0, 0),
(74, 'oxqrew', '', 3, 57, 0, 0),
(75, 'xmdkfv', '', 3, 57, 0, 0),
(76, 'zhyz5b', '', 3, 57, 0, 0),
(77, 'sudrua', '', 3, 57, 0, 0),
(78, 'emke1a', '', 3, 57, 3, 0),
(79, '1xnd8r', '', 3, 57, 5, 0),
(80, '5kk7on', '', 3, 57, 3, 0),
(81, '4vdgd6', '', 3, 57, 0, 0),
(82, '9lzr3i', '', 3, 57, 0, 0),
(83, 'w84cje', '', 3, 57, 0, 0),
(84, 'hak5zf', '', 3, 57, 0, 0),
(85, 'cw0xsv', '', 3, 57, 0, 0),
(86, 'q50pd2', '', 3, 57, 0, 0),
(87, 'wv3w5e', '', 3, 57, 0, 0),
(88, '4p8ck0', '', 3, 57, 0, 0),
(89, 'w2qvfx', '', 3, 57, 0, 0),
(90, 'fx0qwv', '', 3, 57, 0, 0),
(91, 'mjp5ao', '', 3, 57, 0, 0),
(92, 'ih83v9', '', 3, 58, 0, 0),
(93, 'f7jvtk', '', 3, 58, 0, 0),
(94, 'lrn3ji', '', 3, 58, 0, 0),
(95, 'l2w1ad', '', 3, 58, 0, 0),
(96, '4vn4jl', '', 3, 58, 0, 0),
(97, '05n05n', '', 3, 58, 0, 0),
(98, 'mdudxl', 'undefined', 3, 58, 0, 0),
(99, 'p26qyj', 'undefined', 3, 58, 0, 0),
(100, '9rovt3', 'undefined', 3, 58, 0, 0),
(101, 'hnmg7n', 'undefined', 3, 58, 2, 0),
(102, 'znohl7', 'undefined', 3, 58, 0, 0),
(103, 'j6pc62', 'undefined', 3, 58, 0, 0),
(104, 'r8f531', 'sdfas', 3, 58, 0, 0),
(105, 'abb2ox', 'sdfasdf', 3, 58, 0, 0),
(106, 'quktxm', 'sdfasdfasdf', 3, 59, 3, 0),
(107, '5d78nw', 'sdfasd', 3, 60, 0, 0),
(108, 'y03xed', '', 3, 61, 0, 0),
(109, 'yzxr9i', 'asdfasdf', 3, 62, 0, 0),
(110, 'nqsbiy', 'asdfasdfasdf', 3, 63, 0, 0),
(111, 'e6k34l', 'asdfa', 3, 63, 0, 0),
(112, 'z86646', 'aaaaaaaaaaaaaaaaaaaaaa', 3, 64, 0, 0),
(113, 'tpox5v', 'sdfasdf', 3, 64, 0, 0),
(114, 'ix5p60', 'sdfasd', 3, 64, 0, 0),
(115, 'eogiyz', 'sdf', 3, 64, 0, 0),
(116, 'az9d80', 'sdfasdf', 3, 64, 0, 0),
(117, 'qp0e35', 'aaaaaaaaaaaaaaaaa', 3, 65, 0, 0),
(118, '75zdfe', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 3, 66, 0, 0),
(119, 'ps4u0x', 'deraex', 3, 67, 0, 0),
(120, 'iu67k8', 'assssssssssss', 3, 67, 0, 0),
(121, 'ggx7jz', 'dfasfasdf', 3, 67, 0, 0),
(122, 'si4h5p', 'sdfe', 3, 68, 0, 0),
(123, 'liztpn', '', 3, 69, 0, 0),
(124, 'v823j4', 'sssssssss', 3, 70, 0, 0),
(125, 'la6o8k', 'sdfa', 3, 70, 0, 0),
(126, 's02a01', 'asssssssssssssssss', 3, 71, 0, 0);

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

--
-- Dumping data for table `orders_content`
--

INSERT INTO `orders_content` (`order_id`, `user_id`, `canteen_id`, `item_id`, `quantity`) VALUES
(124, 3, 0, 1, 0),
(124, 3, 0, 2, 0),
(125, 3, 0, 1, 0),
(125, 3, 0, 2, 0),
(125, 3, 0, 1, 4),
(125, 3, 0, 2, 4);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
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
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- AUTO_INCREMENT for table `rajeev_item_list`
--
ALTER TABLE `rajeev_item_list`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
