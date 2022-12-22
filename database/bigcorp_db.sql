-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 22, 2022 lúc 08:18 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bigcorp_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bought_customer_distriagent`
--

CREATE TABLE `bought_customer_distriagent` (
  `customer_id` int(11) NOT NULL,
  `da_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `bought_customer_distriagent`
--

INSERT INTO `bought_customer_distriagent` (`customer_id`, `da_id`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cant_fix_distriagent_warehouse`
--

CREATE TABLE `cant_fix_distriagent_warehouse` (
  `da_id` int(11) NOT NULL,
  `wc_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `check_warranty`
--

CREATE TABLE `check_warranty` (
  `unique_product_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `warranty_period` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `check_warranty`
--

INSERT INTO `check_warranty` (`unique_product_id`, `customer_id`, `warranty_period`) VALUES
(1, 1, 88),
(2, 1, 90),
(3, 1, 30),
(4, 2, 100),
(5, 2, 300);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`customer_id`, `name`, `address`, `phone`) VALUES
(1, 'customer 1', 'address 1', '352345342'),
(2, 'customer 2', 'address 2', '924759348');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `distribution_agents`
--

CREATE TABLE `distribution_agents` (
  `da_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `distribution_agents`
--

INSERT INTO `distribution_agents` (`da_id`, `name`, `address`, `username`, `password`) VALUES
(1, 'đại lý phân phối 1', '50 cầu giấy', 'dailyphanphoi1', 'dailyphanphoi1'),
(2, 'đại lý phân phối 2', '100 hai bà trưng', 'dailyphanphoi2', 'dailyphanphoi2'),
(3, 'đại lý phân phối 3', '54 cầu giấy', 'dailyphanphoi3', 'dailyphanphoi3'),
(4, 'đại lý phân phối 4', '56 cầu giấy', 'dailyphanphoi4', 'dailyphanphoi4');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `factories`
--

CREATE TABLE `factories` (
  `fa_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `factories`
--

INSERT INTO `factories` (`fa_id`, `name`, `address`, `username`, `password`) VALUES
(1, 'cơ sở sản xuất 1', '2 cầu giấy', 'cososanxuat1', 'cososanxuat1'),
(2, 'cơ sở sản xuất 2', '4 hoàn kiếm', 'cososanxuat2', 'cososanxuat2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `fix_factory_warehouse`
--

CREATE TABLE `fix_factory_warehouse` (
  `product_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `info_products`
--

CREATE TABLE `info_products` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `warranty_period` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `info_products`
--

INSERT INTO `info_products` (`product_id`, `category_id`, `name`, `description`, `quantity`, `price`, `warranty_period`, `status`) VALUES
(100, 1, 'Chảo chống dính', '', 2000, 20, 180, ''),
(101, 1, 'Bộ nồi inox', '', 2500, 18, 180, ''),
(200, 2, 'Bếp gas', '', 2500, 25, 60, ''),
(201, 2, 'Bếp hồng ngoại', '', 3000, 30, 365, ''),
(300, 3, 'Máy làm mát', '', 3500, 35, 365, ''),
(301, 3, 'Nồi cơm điện', '', 3500, 40, 365, ''),
(400, 4, 'Máy lọc nước Hydrogen', '', 4500, 35, 730, ''),
(401, 4, 'Máy lọc nước Eco', '', 5500, 40, 730, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `info_warranty_products`
--

CREATE TABLE `info_warranty_products` (
  `warranty_summon_card_id` int(11) NOT NULL,
  `unique_product_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `info_warranty_products`
--

INSERT INTO `info_warranty_products` (`warranty_summon_card_id`, `unique_product_id`, `status`) VALUES
(1, 2, 'pending');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pc_accounts`
--

CREATE TABLE `pc_accounts` (
  `pc_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `pc_accounts`
--

INSERT INTO `pc_accounts` (`pc_id`, `username`, `password`) VALUES
(1, 'parentcompany1', 'parentcompany1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_categories`
--

CREATE TABLE `product_categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_categories`
--

INSERT INTO `product_categories` (`category_id`, `name`) VALUES
(1, 'Dụng cụ nhà bếp'),
(2, 'Thiết bị nhà bếp'),
(3, 'Gia dụng điện tử'),
(4, 'Máy lọc nước');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_customer`
--

CREATE TABLE `product_customer` (
  `unique_product_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `warranty_period` int(11) NOT NULL,
  `fix_status` int(11) NOT NULL,
  `still_in_warranty_period` int(1) NOT NULL,
  `times_of_warranty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_customer`
--

INSERT INTO `product_customer` (`unique_product_id`, `customer_id`, `product_id`, `warranty_period`, `fix_status`, `still_in_warranty_period`, `times_of_warranty`) VALUES
(1, 1, 100, 88, 0, 1, 0),
(2, 1, 100, 90, 1, 1, 0),
(3, 1, 200, 30, 0, 1, 0),
(4, 2, 100, 100, 0, 1, 0),
(5, 2, 401, 300, 0, 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_distriagent`
--

CREATE TABLE `product_distriagent` (
  `da_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_distriagent`
--

INSERT INTO `product_distriagent` (`da_id`, `product_id`, `amount`) VALUES
(1, 100, 300),
(1, 101, 300),
(1, 200, 300),
(1, 201, 300),
(1, 300, 300),
(1, 301, 300),
(1, 400, 300),
(1, 401, 300),
(2, 100, 500),
(2, 101, 500),
(2, 200, 500),
(2, 201, 500),
(2, 300, 500),
(2, 301, 500),
(2, 400, 500),
(2, 401, 500);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_factory`
--

CREATE TABLE `product_factory` (
  `stt` int(11) NOT NULL,
  `fa_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_factory`
--

INSERT INTO `product_factory` (`stt`, `fa_id`, `product_id`, `amount`) VALUES
(1, 1, 100, 300),
(2, 1, 101, 300),
(3, 1, 200, 300),
(4, 1, 201, 300),
(5, 1, 300, 300),
(6, 1, 301, 300),
(7, 1, 400, 300),
(8, 1, 401, 300),
(9, 2, 100, 500),
(10, 2, 101, 500),
(11, 2, 200, 500),
(12, 2, 201, 500),
(13, 2, 300, 500),
(14, 2, 301, 500),
(15, 2, 400, 500),
(16, 2, 401, 500),
(17, 3, 100, 300),
(18, 3, 101, 300),
(19, 3, 200, 300),
(20, 3, 201, 300),
(21, 3, 300, 300),
(22, 3, 301, 300),
(23, 3, 400, 300),
(24, 3, 401, 300),
(25, 3, 100, 300),
(26, 1, 101, 300),
(27, 1, 200, 300),
(28, 1, 201, 300),
(29, 1, 300, 300),
(30, 1, 301, 300),
(31, 1, 400, 300),
(32, 1, 401, 300);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sold_products`
--

CREATE TABLE `sold_products` (
  `stt` int(11) NOT NULL,
  `da_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sold_products`
--

INSERT INTO `sold_products` (`stt`, `da_id`, `product_id`, `amount`) VALUES
(1, 1, 100, 3),
(2, 1, 200, 1),
(3, 1, 401, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'processing'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `transactions`
--

INSERT INTO `transactions` (`transaction_id`, `customer_id`, `status`) VALUES
(1, 1, 'shipped'),
(2, 1, 'shipped'),
(3, 2, 'shipped');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transaction_details`
--

CREATE TABLE `transaction_details` (
  `unique_product_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity_ordered` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `transaction_details`
--

INSERT INTO `transaction_details` (`unique_product_id`, `transaction_id`, `customer_id`, `product_id`, `quantity_ordered`, `unit_price`, `total`) VALUES
(1, 2, 1, 100, 0, 0, 0),
(2, 1, 1, 100, 3, 0, 0),
(3, 1, 1, 200, 5, 0, 0),
(4, 3, 2, 401, 4, 0, 0),
(5, 3, 2, 100, 10, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `warranty_centers`
--

CREATE TABLE `warranty_centers` (
  `wc_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `warranty_centers`
--

INSERT INTO `warranty_centers` (`wc_id`, `name`, `address`, `username`, `password`) VALUES
(1, 'trung tâm bảo hành 1', '100 cầu giấy', 'trungtambaohanh1', 'trungtambaohanh1'),
(2, 'trung tâm bảo hành 2', '200 hai bà trưng', 'trungtambaohanh2', 'trungtambaohanh2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `warranty_summon_customer_distriagent`
--

CREATE TABLE `warranty_summon_customer_distriagent` (
  `warranty_summon_card_id` int(11) NOT NULL,
  `da_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `warranty_summon_customer_distriagent`
--

INSERT INTO `warranty_summon_customer_distriagent` (`warranty_summon_card_id`, `da_id`, `customer_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `warranty_summon_distriagents_warehouse`
--

CREATE TABLE `warranty_summon_distriagents_warehouse` (
  `warranty_summon_card_id` int(11) NOT NULL,
  `wc_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `warranty_summon_distriagents_warehouse`
--

INSERT INTO `warranty_summon_distriagents_warehouse` (`warranty_summon_card_id`, `wc_id`, `type`) VALUES
(1, 1, 'warranty');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `warranty_warehouse`
--

CREATE TABLE `warranty_warehouse` (
  `warranty_summon_card_id` int(11) NOT NULL,
  `wc_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `warranty_warehouse`
--

INSERT INTO `warranty_warehouse` (`warranty_summon_card_id`, `wc_id`, `status`) VALUES
(1, 1, 'pending');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bought_customer_distriagent`
--
ALTER TABLE `bought_customer_distriagent`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `da_id` (`da_id`);

--
-- Chỉ mục cho bảng `cant_fix_distriagent_warehouse`
--
ALTER TABLE `cant_fix_distriagent_warehouse`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `da_id` (`da_id`,`wc_id`,`product_id`),
  ADD KEY `fk_cant_fix_distriagent_warehouse_to_warranty_centers` (`wc_id`);

--
-- Chỉ mục cho bảng `check_warranty`
--
ALTER TABLE `check_warranty`
  ADD PRIMARY KEY (`unique_product_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Chỉ mục cho bảng `distribution_agents`
--
ALTER TABLE `distribution_agents`
  ADD PRIMARY KEY (`da_id`);

--
-- Chỉ mục cho bảng `factories`
--
ALTER TABLE `factories`
  ADD PRIMARY KEY (`fa_id`);

--
-- Chỉ mục cho bảng `fix_factory_warehouse`
--
ALTER TABLE `fix_factory_warehouse`
  ADD PRIMARY KEY (`product_id`);

--
-- Chỉ mục cho bảng `info_products`
--
ALTER TABLE `info_products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `info_warranty_products`
--
ALTER TABLE `info_warranty_products`
  ADD PRIMARY KEY (`warranty_summon_card_id`),
  ADD KEY `product_id` (`unique_product_id`),
  ADD KEY `unique_product_id` (`unique_product_id`);

--
-- Chỉ mục cho bảng `pc_accounts`
--
ALTER TABLE `pc_accounts`
  ADD PRIMARY KEY (`pc_id`);

--
-- Chỉ mục cho bảng `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `product_customer`
--
ALTER TABLE `product_customer`
  ADD PRIMARY KEY (`unique_product_id`),
  ADD KEY `customer_id` (`customer_id`,`product_id`),
  ADD KEY `fk_product_customer_to_info_products` (`product_id`);

--
-- Chỉ mục cho bảng `product_distriagent`
--
ALTER TABLE `product_distriagent`
  ADD KEY `product_id` (`product_id`),
  ADD KEY `da_id` (`da_id`);

--
-- Chỉ mục cho bảng `product_factory`
--
ALTER TABLE `product_factory`
  ADD PRIMARY KEY (`stt`),
  ADD KEY `fa_id` (`fa_id`,`product_id`),
  ADD KEY `fk_product_factory_to_info_products` (`product_id`);

--
-- Chỉ mục cho bảng `sold_products`
--
ALTER TABLE `sold_products`
  ADD PRIMARY KEY (`stt`),
  ADD KEY `da_id` (`da_id`,`product_id`);

--
-- Chỉ mục cho bảng `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `transaction_details`
--
ALTER TABLE `transaction_details`
  ADD PRIMARY KEY (`unique_product_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `transaction_id` (`transaction_id`,`customer_id`),
  ADD KEY `fk_customers_to_transaction_details` (`customer_id`);

--
-- Chỉ mục cho bảng `warranty_centers`
--
ALTER TABLE `warranty_centers`
  ADD PRIMARY KEY (`wc_id`);

--
-- Chỉ mục cho bảng `warranty_summon_customer_distriagent`
--
ALTER TABLE `warranty_summon_customer_distriagent`
  ADD PRIMARY KEY (`warranty_summon_card_id`),
  ADD KEY `da_id` (`da_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `warranty_summon_distriagents_warehouse`
--
ALTER TABLE `warranty_summon_distriagents_warehouse`
  ADD PRIMARY KEY (`warranty_summon_card_id`),
  ADD KEY `da_id` (`wc_id`,`warranty_summon_card_id`);

--
-- Chỉ mục cho bảng `warranty_warehouse`
--
ALTER TABLE `warranty_warehouse`
  ADD PRIMARY KEY (`warranty_summon_card_id`),
  ADD KEY `da_id` (`wc_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `info_products`
--
ALTER TABLE `info_products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=402;

--
-- AUTO_INCREMENT cho bảng `product_factory`
--
ALTER TABLE `product_factory`
  MODIFY `stt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `sold_products`
--
ALTER TABLE `sold_products`
  MODIFY `stt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bought_customer_distriagent`
--
ALTER TABLE `bought_customer_distriagent`
  ADD CONSTRAINT `fk_bought_customer_distriagent_to_distribution_agents` FOREIGN KEY (`da_id`) REFERENCES `distribution_agents` (`da_id`),
  ADD CONSTRAINT `fk_customers_to_product_bought_customer_distriagent` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Các ràng buộc cho bảng `cant_fix_distriagent_warehouse`
--
ALTER TABLE `cant_fix_distriagent_warehouse`
  ADD CONSTRAINT `fk__to_info_products` FOREIGN KEY (`product_id`) REFERENCES `info_products` (`product_id`),
  ADD CONSTRAINT `fk_cant_fix_distriagent_warehouse_to_distribution_agents` FOREIGN KEY (`da_id`) REFERENCES `distribution_agents` (`da_id`),
  ADD CONSTRAINT `fk_cant_fix_distriagent_warehouse_to_warranty_centers` FOREIGN KEY (`wc_id`) REFERENCES `warranty_centers` (`wc_id`);

--
-- Các ràng buộc cho bảng `check_warranty`
--
ALTER TABLE `check_warranty`
  ADD CONSTRAINT `fk_check_warranty_to_product_customer` FOREIGN KEY (`unique_product_id`) REFERENCES `product_customer` (`unique_product_id`),
  ADD CONSTRAINT `fk_customers_to_check_warranty` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Các ràng buộc cho bảng `factories`
--
ALTER TABLE `factories`
  ADD CONSTRAINT `pk_factories_to_product_factory` FOREIGN KEY (`fa_id`) REFERENCES `product_factory` (`fa_id`);

--
-- Các ràng buộc cho bảng `fix_factory_warehouse`
--
ALTER TABLE `fix_factory_warehouse`
  ADD CONSTRAINT `fk_fix_factory_warehouse_to_info_products` FOREIGN KEY (`product_id`) REFERENCES `info_products` (`product_id`);

--
-- Các ràng buộc cho bảng `info_products`
--
ALTER TABLE `info_products`
  ADD CONSTRAINT `fk_info_products_to_product_categories` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`category_id`);

--
-- Các ràng buộc cho bảng `info_warranty_products`
--
ALTER TABLE `info_warranty_products`
  ADD CONSTRAINT `fk_info_warranty_product_to_warranty_summon_customer_distriagent` FOREIGN KEY (`warranty_summon_card_id`) REFERENCES `warranty_summon_customer_distriagent` (`warranty_summon_card_id`),
  ADD CONSTRAINT `fk_info_warranty_products_to_product_customer` FOREIGN KEY (`unique_product_id`) REFERENCES `product_customer` (`unique_product_id`);

--
-- Các ràng buộc cho bảng `product_categories`
--
ALTER TABLE `product_categories`
  ADD CONSTRAINT `pk_product_categories_to_info_products` FOREIGN KEY (`category_id`) REFERENCES `info_products` (`category_id`);

--
-- Các ràng buộc cho bảng `product_customer`
--
ALTER TABLE `product_customer`
  ADD CONSTRAINT `fk_customers_to_product_customer` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `fk_product_customer_to_info_products` FOREIGN KEY (`product_id`) REFERENCES `info_products` (`product_id`);

--
-- Các ràng buộc cho bảng `product_distriagent`
--
ALTER TABLE `product_distriagent`
  ADD CONSTRAINT `fk_product_distriagent_to_distribution_agents` FOREIGN KEY (`da_id`) REFERENCES `distribution_agents` (`da_id`),
  ADD CONSTRAINT `fk_product_distriagent_to_info_products` FOREIGN KEY (`product_id`) REFERENCES `info_products` (`product_id`);

--
-- Các ràng buộc cho bảng `product_factory`
--
ALTER TABLE `product_factory`
  ADD CONSTRAINT `fk_product_factory_to_info_products` FOREIGN KEY (`product_id`) REFERENCES `info_products` (`product_id`);

--
-- Các ràng buộc cho bảng `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `fk_customers_to_transactions` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Các ràng buộc cho bảng `transaction_details`
--
ALTER TABLE `transaction_details`
  ADD CONSTRAINT `fk_customers_to_transaction_details` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `fk_transaction_details_to_info_products` FOREIGN KEY (`product_id`) REFERENCES `info_products` (`product_id`),
  ADD CONSTRAINT `fk_transaction_details_to_product_customer` FOREIGN KEY (`unique_product_id`) REFERENCES `product_customer` (`unique_product_id`),
  ADD CONSTRAINT `fk_transaction_details_to_transactions` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`);

--
-- Các ràng buộc cho bảng `warranty_summon_customer_distriagent`
--
ALTER TABLE `warranty_summon_customer_distriagent`
  ADD CONSTRAINT `fk_customers_to_warranty_summon_customer_distriagent` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `fk_warranty_summon_customer_distriagent_to_distribution_agents` FOREIGN KEY (`da_id`) REFERENCES `distribution_agents` (`da_id`);

--
-- Các ràng buộc cho bảng `warranty_summon_distriagents_warehouse`
--
ALTER TABLE `warranty_summon_distriagents_warehouse`
  ADD CONSTRAINT `fk_warranty_summon_distr_to_warranty_summon_customer_distriagent` FOREIGN KEY (`warranty_summon_card_id`) REFERENCES `warranty_summon_customer_distriagent` (`warranty_summon_card_id`),
  ADD CONSTRAINT `fk_warranty_summon_distriagents_warehouse_to_warranty_centers` FOREIGN KEY (`wc_id`) REFERENCES `warranty_centers` (`wc_id`);

--
-- Các ràng buộc cho bảng `warranty_warehouse`
--
ALTER TABLE `warranty_warehouse`
  ADD CONSTRAINT `fk_warranty_warehouse_to_warranty_centers` FOREIGN KEY (`wc_id`) REFERENCES `warranty_centers` (`wc_id`),
  ADD CONSTRAINT `fk_warranty_warehouse_to_warranty_summon_customer_distriagent` FOREIGN KEY (`warranty_summon_card_id`) REFERENCES `warranty_summon_customer_distriagent` (`warranty_summon_card_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
