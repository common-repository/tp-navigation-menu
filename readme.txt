=== T&P Navigation Menu ===
Contributors: Peyman Shadpour, Tzahi Raz
Tags: navigation, menu, jquery, scrollbar, sticky, position fixed, nav
Requires at least: 3.0.0
Tested up to: 3.6
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

T&P Navigation Menu for WordPress simple sticky navigation menu when scroll down the page.

== Description ==

T&P Navigation Menu is a smart simple plugin that stick your default wordpress nav menu to the top of the page when you scroll down.

*   T&P Navigation Menu works only with wordpress twentythirteen theme!
*   for use in a diffrent theme you need to add `<div id="navbar" class="navbar"></div>` and put your menu inside it.


== Installation ==

1. Upload `T&P Navigation Menu` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. For a different theme put `<div id="navbar" class="navbar"><?php wp_nav_menu(); ?></div>` in your header.

== Frequently Asked Questions ==

= The T&P Navigation Menu does not work =

Make sure that there is a `wp_footer()` func in your footer.php and `wp_header()` in your header.php.

= I have `wp_footer()` func in footer.php and `wp_header()` in header.php but still does not work =

Make sure that your menu inside `<div id="navbar" class="navbar"><?php wp_nav_menu(); ?></div>`.

= How do I change the design =
You can use CSS to change the look and feel of the layout.

== Screenshots ==

1. screenshot-1.jpg 
2. screenshot-2.jpg 
3. screenshot-3.jpg 

== Changelog ==

= 1.0 =
* First release August 2013
