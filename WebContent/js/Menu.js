$(function(){
    var Menu_html = "\
<div class='app-bar fixed-top darcula' data-role='appbar'>\
<a href='./home_notice.html' class='app-bar-element branding' style='background-color:#CEDBF2'><img style='width: 113px;' src='../img/logo.png' alt='ケー・アールライン'></a>\
<span class='app-bar-divider'></span>\
  <ul class='app-bar-menu'>\
    <li><a href='./home_notice.html'>HOME</a></li>\
    <li><a href='' class='dropdown-toggle'>　配車管理　</a>\
      <ul class='d-menu' data-role='dropdown'>\
        <li><a href='./mock_unsou.html'><span class='title'>配車表入力</span></a></li>\
      </ul>\
    </li>\
    <li><a href='' class='dropdown-toggle'>点呼管理</a>\
      <ul class='d-menu' data-role='dropdown'>\
        <li><a href='./roll_call_add.html'><span class='title'>点呼記録表入力</span></a></li>\
      </ul>\
    </li>\
    <li><a href='' class='dropdown-toggle'>日常点検</a>\
      <ul class='d-menu' data-role='dropdown'>\
        <li><a href='./inspection_add.html'><span class='title'>日常点検実施表入力</span></a></li>\
        <li><a href='./inspection_list.html'><span class='title'>日常点検実施表検索一覧</span></a></li>\
      </ul>\
    </li>\
    <li><a href='' class='dropdown-toggle'>運送日報管理</a>\
      <ul class='d-menu' data-role='dropdown'>\
        <li><a href='./driving_report_add.html'><span class='title'>運送日報入力</span></a></li>\
        <li><a href='./driving_report_list.html'><span class='title'>運送日報検索一覧</span></a></li>\
      </ul>\
    </li>\
    <li><a href='' class='dropdown-toggle'>経費</a>\
      <ul class='d-menu' data-role='dropdown'>\
        <li><a href='./salesCost_driver_daily.html'><span class='title'>ドライバー別売上一覧</span></a></li>\
        <li><a href='./bill_list.html'><span class='title'>得意先別請求一覧</span></a></li>\
        <li><a href='./bill_close.html'><span class='title'>請求書締め処理</span></a></li>\
        <li><a href='./bill_search.html'><span class='title'>請求書印刷</span></a></li>\
        <li><a href='./salesCost_sales_mock.html'><span class='title'>得意先別売上一覧</span></a></li>\
        <li><a href='./salesCost_pay_mock.html'><span class='title'>委託先別支払一覧</span></a></li>\
        <li><a href='./cost_truck_monthly.html'><span class='title'>車両別固定費・変動費・諸経費入力</span></a></li>\
        <li><a href='./car_sales_mock.html'><span class='title'>車両別・委託先別売上経費一覧</span></a></li>\
        <li><a href='./sales_month.html'><span class='title'>売上締め処理</span></a></li>\
    </ul>\
    </li>\
    <li><a href='' class='dropdown-toggle'>運行管理</a>\
      <ul class='d-menu' data-role='dropdown'>\
        <li><a href='./operationControl_bindingWorkHour.html'><span class='title'>ドライバー別拘束・運転時間管理一覧</span></a></li>\
        <li><a href='./operationControl_car_fuelCost.html'><span class='title'>月別個車燃費推移一覧</span></a></li>\
        <li><a href='./driver_mock.html'><span class='title'>年次ドライバー別実車・空車・総走行距離一覧</span></a></li>\
      </ul>\
    </li>\
    <li><a href='' class='dropdown-toggle'>マスター管理</a>\
      <ul class='d-menu' data-role='dropdown'>\
        <li><a href='./master_loginConfig_user.html'><span class='title'>ログイン設定</span></a></li>\
        <li><a href='./master_company_list.html'><span class='title'>会社一覧</span></a></li>\
        <li><a href='./master_base_data.html'><span class='title'>基本情報</span></a></li>\
	    <li><a href='./master_user.html'><span class='title'>社員一覧</span></a></li>\
	    <li><a href='./customer_mock.html'><span class='title'>得意先一覧</span></a></li>\
        <li><a href='./Contractors_mock.html'><span class='title'>委託先(外注)一覧</span></a></li>\
        <li><a href='./holiday.html'><span class='title'>祝日設定</span></a></li>\
        <li><a href='./master_truck_edit.html'><span class='title'>車両一覧</span></a></li>\
        <li><a href='./master_root.html'><span class='title'>定期便(運行コース)</span></a></li>\
        <li><a href='./master_fuelPrise.html'><span class='title'>月別燃料単価</span></a></li>\
      </ul>\
    </li>\
  </ul>\
  <div class='app-bar-element place-right'>\
    <span class='dropdown-toggle'>管理者Ａ</span>\
      <div class='app-bar-drop-container padding10 place-right no-margin-top block-shadow fg-dark' data-role='dropdown' data-no-close='true' style='width: 180px'>\
        <ul class='unstyled-list fg-dark'>\
          <li><a href='login.html' class='fg-white3 fg-hover-yellow'>ログアウト</a></li>\
        </ul>\
      </div>\
  </div>\
</div>";
$('#Menu_load').html(Menu_html);
})
