生成二维码会报错
http://rensanning.iteye.com/blog/2034026
替换
下载最新的encode.xml文件，覆盖 platforms\android\res\menu\encode.xml 

<menu xmlns:android="http://schemas.android.com/apk/res/android">
 <item android:id="@+id/menu_share"
       android:title="@string/menu_share"
       android:icon="@android:drawable/ic_menu_share"
       android:orderInCategory="1"
       android:showAsAction="withText|ifRoom"/>
 <item android:id="@+id/menu_encode"
       android:title="@string/menu_encode_vcard"
       android:icon="@android:drawable/ic_menu_sort_alphabetically"
       android:orderInCategory="2"
       android:showAsAction="withText|ifRoom"/>
</menu>