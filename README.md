## Gun Control Grades<a href="https://guncontrolgrades.org"><img align="left" src="/public/favicon.ico" width="80px" style="padding-right:15px"></a>

[![Developer](https://img.shields.io/badge/Developer-dillon-red.svg)](http://dillonpetito.ml/)

___

#### [guncontrolgrades.org](https://guncontrolgrades.org)

Choose candidates to vote for in the 2018 U.S. Midterm elections based on inverted ratings from the National Rifle Association and endorsements from anti-gun-violence organizations.

___
<div style="line-height:1.2">

#### Table of Contents

__[About](#about)__

__[Technical Details](#technical_details)__<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Dependencies](#dependencies)

__[Screenshots](#screenshots)__<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Desktop](#desktop)<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Mobile](#mobile)<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Animations](#animations)<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Share Buttons](#share_buttons)<br>

__[Analytics](#analytics)__<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Pageviews](#pageviews)<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Events](#events)<br>

</div>

___


#### <span id="about">About</span>

Since 1976, the National Rifle Association has issued grades to elected officials and political candidates based on either their voting records or a response to a questionnare. Once prominently publicized, these grades have in the last year disappeared from the NRA's website and literature. They are still being issued, however, to pressure politicians into following the NRA's anti-gun control agenda.

Gun Control Grades inverts the grades issued by the National Rifle Association. An F from the NRA becomes an A from GCG; a D becomes a B, and so on.

Additionally, a Star from GCG indicates that a candidate has been endorsed by Giffords or Gun Sense, organizations founded to fight the gun violence epidemic. Candidates who have not yet been rated by either organization or the NRA have a question mark by their name.

___

#### <span id="technical_details">Technical Details</span>

| React | React Router |
|--|--|


##### <span id="dependencies">Dependencies</span>

| react-ga | react-to-print | react-share |
|--|--|--|

| react-icons | reactstrap | react-sticky |
|--|--|--|



___

#### <span id="screenshots">Screenshots</span>

##### <span id="desktop">Desktop</span>

<img alt="screenshot" src="/extra_files/media-for-docs/desktop/1_land.png?" width="100%" style="max-width:800px">

<img alt="screenshot" src="/extra_files/media-for-docs/desktop/3_state.png" width="100%" style="max-width:800px">


##### <span id="mobile">Mobile</span>

<img alt="screenshot" src="/extra_files/media-for-docs/mobile/1_land_mobile.png" width="49%" align="center">  <img alt="screenshot" src="/extra_files/media-for-docs/mobile/3_hint_mobile.png" width="49%" align="center"> <img alt="screenshot" src="/extra_files/media-for-docs/mobile/4_select_mobile.png" width="49%" align="center"> <img alt="screenshot" src="/extra_files/media-for-docs/mobile/5_myvotes_mobile.png" width="49%" align="center" >

#

##### <span id="animations">Animations</span>

<img alt="screenshot" src="/extra_files/media-for-docs/animations/2_myvotes_animation.gif" width="40%">

<img alt="screenshot" src="/extra_files/media-for-docs/animations/1_add_animation.gif" width="40%">

#


##### <span id="share_buttons">Share Buttons</span>


<img alt="screenshot" src="/extra_files/media-for-docs/desktop/5_email.png" width="49%" align="center"> <img alt="screenshot" src="/extra_files/media-for-docs/desktop/8_print.png" width="49%" align="center" ><img alt="screenshot" src="/extra_files/media-for-docs/desktop/6_facebook.png" width="49%" align="center" ><img alt="screenshot" src="/extra_files/media-for-docs/desktop/7_twitter.png" width="49%" align="center">

___

#### <span id="analytics">Analytics</span>

__GCG__ uses `react-ga` for integration with `Google Analytics`.

Along with being integrated to track which states are viewed, it also has integration with session `events` to track which legislations are selected, how many voting card interactions are performed, and if or when a user prints or shares their voting card via email or social media.

#
##### <span id="pageviews">Pageviews</span>
Pageviews track which states are visited.

<img alt="screenshot" src="/extra_files/media-for-docs/analytics/1_pages.png" width="460px" align="center">

#
##### <span id="events">Event Categories:</span>
Categories are broken up into candidate card interactions and shares.

<img alt="screenshot" src="/extra_files/media-for-docs/analytics/2_event_categories.png" width="800px" align="center">

#
##### Event Category: `Interact`
This event category tracks users' legislation tab changes, candidate button adds, and mobile voting card popup visibility toggles.

<img alt="screenshot" src="/extra_files/media-for-docs/analytics/3_interact_actions.png" width="800px" align="center">

#
##### Event Action: `Changed Legislature`
The `Change Legislature` event action also tracks the name of the legislation that a user views.

<img alt="screenshot" src="/extra_files/media-for-docs/analytics/4_interact_labels.png" width="800px" align="center">

#
##### Event Category: `Share`
This event category tracks when a user prints or shares their card via Email, Twitter, or Facebook. An additional set of print/share buttons are visible on the mobile version of the app, and these too are tracked.

<img alt="screenshot" src="/extra_files/media-for-docs/analytics/5_share_actions.png" width="800px" align="center">




