/*
Navicat MySQL Data Transfer

Source Server         : yigu
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goods

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 18:02:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for headerpage
-- ----------------------------
DROP TABLE IF EXISTS `headerpage`;
CREATE TABLE `headerpage` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `oprice` decimal(10,2) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of headerpage
-- ----------------------------
INSERT INTO `headerpage` VALUES ('1', '澳芒4.5kg', '588.00', '688.00', 'img/201711211102321018.jpg');
INSERT INTO `headerpage` VALUES ('2', '智利进口车厘子5kg', '368.00', '448.00', 'img/201712270934922053.jpg');
INSERT INTO `headerpage` VALUES ('3', '美国进口桃驳李1kg', '69.80', '88.00', 'img/201504230947620025.jpg');
INSERT INTO `headerpage` VALUES ('4', '台湾雾连4个装', '48.00', '58.00', 'img/201606071519919017.jpg');
INSERT INTO `headerpage` VALUES ('5', '卡士餐后一小时（250g*3）', '38.00', '42.00', 'img/201707031817729009.jpg');
INSERT INTO `headerpage` VALUES ('6', '新疆牛奶250ml*12', '75.80', '82.80', 'img/201707121024487040.jpg');
INSERT INTO `headerpage` VALUES ('7', '九生堂海鲜898套餐', '598.00', '688.00', 'img/201801041044421059.jpg');
INSERT INTO `headerpage` VALUES ('9', '生态初生蛋12枚', '29.90', '35.80', 'img/201709221009663005.jpg');
INSERT INTO `headerpage` VALUES ('10', '鲜动生活冻虾250g', '41.00', '48.00', 'img/201710241653478027.jpg');
INSERT INTO `headerpage` VALUES ('11', '鲜动生活三文鱼300g', '45.00', '45.00', 'img/201711061349232051.jpg');
INSERT INTO `headerpage` VALUES ('12', '澳芒4.5kg', '588.00', '688.00', 'img/201711061500719057.jpg');
INSERT INTO `headerpage` VALUES ('13', '智利进口车厘子5kg', '368.00', '448.00', 'img/201711101447592020.jpg');
INSERT INTO `headerpage` VALUES ('14', '美国进口桃驳李1kg', '69.80', '88.00', 'img/201711151349863050.jpg');
INSERT INTO `headerpage` VALUES ('15', '台湾雾连4个装', '48.00', '58.00', 'img/201606071519919017.jpg');
INSERT INTO `headerpage` VALUES ('16', '卡士餐后一小时（250g*3）', '38.00', '42.00', 'img/201711211102321018.jpg');
INSERT INTO `headerpage` VALUES ('17', '新疆牛奶250ml*12', '75.80', '82.80', 'img/201711161720793026.jpg');
INSERT INTO `headerpage` VALUES ('18', '九生堂海鲜898套餐', '598.00', '688.00', 'img/201712121533685056.jpg');
INSERT INTO `headerpage` VALUES ('19', '生态初生蛋12枚', '29.90', '35.80', 'img/201606071519919017.jpg');
INSERT INTO `headerpage` VALUES ('20', '鲜动生活冻虾250g', '41.00', '48.00', 'img/201504230947620025.jpg');
INSERT INTO `headerpage` VALUES ('21', '鲜动生活三文鱼300g', '45.00', '45.00', 'img/201606071519919017.jpg');
INSERT INTO `headerpage` VALUES ('22', '九生堂海鲜898套餐', '598.00', '688.00', 'img/201504230947620025.jpg');
INSERT INTO `headerpage` VALUES ('23', '生态初生蛋12枚', '29.90', '35.80', 'img/201710241653478027.jpg');
INSERT INTO `headerpage` VALUES ('24', '鲜动生活冻虾250g', '41.00', '48.00', 'img/201711061349232051.jpg');
INSERT INTO `headerpage` VALUES ('25', '鲜动生活三文鱼300g', '45.00', '45.00', 'img/201711061500719057.jpg');
INSERT INTO `headerpage` VALUES ('26', '澳芒4.5kg', '588.00', '688.00', 'img/201711101447592020.jpg');
INSERT INTO `headerpage` VALUES ('27', '智利进口车厘子5kg', '368.00', '448.00', 'img/201711151349863050.jpg');
INSERT INTO `headerpage` VALUES ('28', '美国进口桃驳李1kg', '69.80', '88.00', 'img/201606071519919017.jpg');
INSERT INTO `headerpage` VALUES ('29', '台湾雾连4个装', '48.00', '58.00', 'img/201711211102321018.jpg');
INSERT INTO `headerpage` VALUES ('30', '卡士餐后一小时（250g*3）', '38.00', '42.00', 'img/201711161720793026.jpg');
INSERT INTO `headerpage` VALUES ('31', '新疆牛奶250ml*12', '75.80', '82.80', 'img/201712121533685056.jpg');
INSERT INTO `headerpage` VALUES ('32', '九生堂海鲜898套餐', '598.00', '688.00', 'img/201606071519919017.jpg');
INSERT INTO `headerpage` VALUES ('36', '生态初生蛋12枚', '29.90', '35.80', 'img/201606071519919017.jpg');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `oprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `peopleqty` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=78 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '鲜动生活三文鱼300g', '45.00', '45.00', '201711281038338040', '47', '1', '1.5');
INSERT INTO `list` VALUES ('2', '九生堂海鲜898套餐', '598.00', '688.00', '201711241718932003', '47', '1', '1.5');
INSERT INTO `list` VALUES ('3', '生态初生蛋12枚', '29.90', '35.80', '201711211102321018', '47', '1', '1.5');
INSERT INTO `list` VALUES ('4', '鲜动生活冻虾250g', '41.00', '48.00', '201711161121790045', '47', '1', '1.5');
INSERT INTO `list` VALUES ('5', '鲜动生活三文鱼300g', '45.00', '45.00', '201712271108116046', '47', '1', '1.5');
INSERT INTO `list` VALUES ('6', '澳芒4.5kg', '588.00', '688.00', '201710170948385011', '47', '1', '1.5');
INSERT INTO `list` VALUES ('7', '智利进口车厘子5kg', '368.00', '448.00', '201706130819104025', '47', '1', '1.5');
INSERT INTO `list` VALUES ('8', '美国进口桃驳李1kg', '69.80', '88.00', '201706130933862033', '47', '1', '1.5');
INSERT INTO `list` VALUES ('9', '台湾雾连4个装', '48.00', '58.00', '201706161743354029', '47', '1', '1.5');
INSERT INTO `list` VALUES ('10', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201704281528481005', '47', '1', '1.5');
INSERT INTO `list` VALUES ('11', '新疆牛奶250ml*12', '75.80', '82.80', '201704261603794028', '47', '1', '1.5');
INSERT INTO `list` VALUES ('12', '九生堂海鲜898套餐', '598.00', '688.00', '201612191405276024', '47', '1', '1.5');
INSERT INTO `list` VALUES ('13', '鲜动生活三文鱼300g', '45.00', '45.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('14', '九生堂海鲜898套餐', '598.00', '688.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('15', '生态初生蛋12枚', '29.90', '35.80', '201702041042997051', '47', '1', '1.5');
INSERT INTO `list` VALUES ('16', '鲜动生活冻虾250g', '41.00', '48.00', '201511091700903052', '47', '1', '1.5');
INSERT INTO `list` VALUES ('17', '鲜动生活三文鱼300g', '45.00', '45.00', '201705121036168053', '47', '1', '1.5');
INSERT INTO `list` VALUES ('18', '澳芒4.5kg', '588.00', '688.00', '201612191409308001', '47', '1', '1.5');
INSERT INTO `list` VALUES ('19', '智利进口车厘子5kg', '368.00', '448.00', '201612191409308001', '47', '1', '1.5');
INSERT INTO `list` VALUES ('20', '美国进口桃驳李1kg', '69.80', '88.00', '201702041042997051', '47', '1', '1.5');
INSERT INTO `list` VALUES ('21', '台湾雾连4个装', '48.00', '58.00', '201706130819104025', '47', '1', '1.5');
INSERT INTO `list` VALUES ('22', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201705121039334047', '47', '1', '1.5');
INSERT INTO `list` VALUES ('23', '新疆牛奶250ml*12', '75.80', '82.80', '201705121036168053', '47', '1', '1.5');
INSERT INTO `list` VALUES ('24', '九生堂海鲜898套餐', '598.00', '688.00', '201710311739592015', '47', '1', '1.5');
INSERT INTO `list` VALUES ('25', '美国进口桃驳李1kg', '69.80', '88.00', '201706130933862033', '47', '1', '1.5');
INSERT INTO `list` VALUES ('26', '台湾雾连4个装', '48.00', '58.00', '201706161743354029', '47', '1', '1.5');
INSERT INTO `list` VALUES ('27', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201704281528481005', '47', '1', '1.5');
INSERT INTO `list` VALUES ('28', '新疆牛奶250ml*12', '75.80', '82.80', '201704261603794028', '47', '1', '1.5');
INSERT INTO `list` VALUES ('29', '九生堂海鲜898套餐', '598.00', '688.00', '201612191405276024', '47', '1', '1.5');
INSERT INTO `list` VALUES ('30', '鲜动生活三文鱼300g', '45.00', '45.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('31', '九生堂海鲜898套餐', '598.00', '688.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('32', '生态初生蛋12枚', '29.90', '35.80', '201702041042997051', '47', '1', '1.5');
INSERT INTO `list` VALUES ('33', '鲜动生活三文鱼300g', '45.00', '45.00', '201705121036168053', '47', '1', '1.5');
INSERT INTO `list` VALUES ('34', '澳芒4.5kg', '588.00', '688.00', '201612191409308001', '47', '1', '1.5');
INSERT INTO `list` VALUES ('35', '智利进口车厘子5kg', '368.00', '448.00', '201612191409308001', '47', '1', '1.5');
INSERT INTO `list` VALUES ('36', '美国进口桃驳李1kg', '69.80', '88.00', '201702041042997051', '47', '1', '1.5');
INSERT INTO `list` VALUES ('37', '台湾雾连4个装', '48.00', '58.00', '201706130819104025', '47', '1', '1.5');
INSERT INTO `list` VALUES ('38', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201705121039334047', '47', '1', '1.5');
INSERT INTO `list` VALUES ('39', '九生堂海鲜898套餐', '598.00', '688.00', '201710311739592015', '47', '1', '1.5');
INSERT INTO `list` VALUES ('40', '美国进口桃驳李1kg', '69.80', '88.00', '201706130933862033', '47', '1', '1.5');
INSERT INTO `list` VALUES ('41', '台湾雾连4个装', '48.00', '58.00', '201706161743354029', '47', '1', '1.5');
INSERT INTO `list` VALUES ('42', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201704281528481005', '47', '1', '1.5');
INSERT INTO `list` VALUES ('43', '新疆牛奶250ml*12', '75.80', '82.80', '201704261603794028', '47', '1', '1.5');
INSERT INTO `list` VALUES ('44', '九生堂海鲜898套餐', '598.00', '688.00', '201612191405276024', '47', '1', '1.5');
INSERT INTO `list` VALUES ('45', '鲜动生活三文鱼300g', '45.00', '45.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('46', '九生堂海鲜898套餐', '598.00', '688.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('47', '生态初生蛋12枚', '29.90', '35.80', '201702041042997051', '47', '1', '1.5');
INSERT INTO `list` VALUES ('48', '鲜动生活三文鱼300g', '45.00', '45.00', '201705121036168053', '47', '1', '1.5');
INSERT INTO `list` VALUES ('49', '澳芒4.5kg', '588.00', '688.00', '201612191409308001', '47', '1', '1.5');
INSERT INTO `list` VALUES ('50', '鲜动生活三文鱼300g', '45.00', '45.00', '201711281038338040', '47', '1', '1.5');
INSERT INTO `list` VALUES ('51', '九生堂海鲜898套餐', '598.00', '688.00', '201711241718932003', '47', '1', '1.5');
INSERT INTO `list` VALUES ('52', '生态初生蛋12枚', '29.90', '35.80', '201711211102321018', '47', '1', '1.5');
INSERT INTO `list` VALUES ('53', '鲜动生活冻虾250g', '41.00', '48.00', '201711161121790045', '47', '1', '1.5');
INSERT INTO `list` VALUES ('54', '鲜动生活三文鱼300g', '45.00', '45.00', '201712271108116046', '47', '1', '1.5');
INSERT INTO `list` VALUES ('55', '澳芒4.5kg', '588.00', '688.00', '201710170948385011', '47', '1', '1.5');
INSERT INTO `list` VALUES ('56', '智利进口车厘子5kg', '368.00', '448.00', '201706130819104025', '47', '1', '1.5');
INSERT INTO `list` VALUES ('57', '美国进口桃驳李1kg', '69.80', '88.00', '201706130933862033', '47', '1', '1.5');
INSERT INTO `list` VALUES ('58', '台湾雾连4个装', '48.00', '58.00', '201706161743354029', '47', '1', '1.5');
INSERT INTO `list` VALUES ('59', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201704281528481005', '47', '1', '1.5');
INSERT INTO `list` VALUES ('60', '新疆牛奶250ml*12', '75.80', '82.80', '201704261603794028', '47', '1', '1.5');
INSERT INTO `list` VALUES ('61', '九生堂海鲜898套餐', '598.00', '688.00', '201612191405276024', '47', '1', '1.5');
INSERT INTO `list` VALUES ('62', '鲜动生活三文鱼300g', '45.00', '45.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('63', '九生堂海鲜898套餐', '598.00', '688.00', '201606280932915000', '47', '1', '1.5');
INSERT INTO `list` VALUES ('64', '生态初生蛋12枚', '29.90', '35.80', '201702041042997051', '47', '1', '1.5');
INSERT INTO `list` VALUES ('65', '鲜动生活冻虾250g', '41.00', '48.00', '201511091700903052', '47', '1', '1.5');
INSERT INTO `list` VALUES ('66', '鲜动生活三文鱼300g', '45.00', '45.00', '201705121036168053', '47', '1', '1.5');
INSERT INTO `list` VALUES ('67', '澳芒4.5kg', '588.00', '688.00', '201612191409308001', '47', '1', '1.5');
INSERT INTO `list` VALUES ('68', '智利进口车厘子5kg', '368.00', '448.00', '201612191409308001', '47', '1', '1.5');
INSERT INTO `list` VALUES ('69', '美国进口桃驳李1kg', '69.80', '88.00', '201702041042997051', '47', '1', '1.5');
INSERT INTO `list` VALUES ('70', '台湾雾连4个装', '48.00', '58.00', '201706130819104025', '47', '1', '1.5');
INSERT INTO `list` VALUES ('71', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201705121039334047', '47', '1', '1.5');
INSERT INTO `list` VALUES ('72', '新疆牛奶250ml*12', '75.80', '82.80', '201705121036168053', '47', '1', '1.5');
INSERT INTO `list` VALUES ('73', '九生堂海鲜898套餐', '598.00', '688.00', '201710311739592015', '47', '1', '1.5');
INSERT INTO `list` VALUES ('74', '美国进口桃驳李1kg', '69.80', '88.00', '201706130933862033', '47', '1', '1.5');
INSERT INTO `list` VALUES ('75', '台湾雾连4个装', '48.00', '58.00', '201706161743354029', '47', '1', '1.5');
INSERT INTO `list` VALUES ('76', '卡士餐后一小时（250g*3）', '38.00', '42.00', '201704281528481005', '47', '1', '1.5');
INSERT INTO `list` VALUES ('77', '新疆牛奶250ml*12', '75.80', '82.80', '201704261603794028', '47', '1', '1.5');

-- ----------------------------
-- Table structure for shopcart
-- ----------------------------
DROP TABLE IF EXISTS `shopcart`;
CREATE TABLE `shopcart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `oprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `peopleqty` int(11) DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `weight` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcart
-- ----------------------------
INSERT INTO `shopcart` VALUES ('1', '鲜动生活三文鱼300g', '45.00', '45.00', '../img/201711281038338040.jpg', '47', '1', '1.5');
INSERT INTO `shopcart` VALUES ('2', '九生堂海鲜898套餐', '598.00', '688.00', '../img/201711241718932003.jpg', '47', '1', '1.5');
INSERT INTO `shopcart` VALUES ('3', '生态初生蛋12枚', '29.90', '35.80', '../img/201711211102321018.jpg', '47', '1', '1.5');
INSERT INTO `shopcart` VALUES ('4', '鲜动生活冻虾250g', '41.00', '48.00', '../img/201711161121790045.jpg', '47', '2', '1.5');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13124988152', '666666');
INSERT INTO `user` VALUES ('8', '13456665464', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('7', '123456', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('6', '', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('9', '13413164567', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('10', '13413155646', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('11', '13419876575', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('12', '17718846936', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('13', '13124988151', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('14', '13127777777', 'f63f4fbc9f8c85d409f2f59f2b9e12d5');
INSERT INTO `user` VALUES ('15', '13725465533', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('16', '13124988178', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('17', '13122222222', 'f379eaf3c831b04de153469d1bec345e');
INSERT INTO `user` VALUES ('18', '13124444444', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('19', '13124988159', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('20', '13124988145', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('21', '13121111111', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('22', '13111111111', 'e3ceb5881a0a1fdaad01296d7554868d');
SET FOREIGN_KEY_CHECKS=1;
