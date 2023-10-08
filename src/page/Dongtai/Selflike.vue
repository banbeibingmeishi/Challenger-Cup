<template>
  <div class="selflike">
    <div class="selflike-left">
        <div class="selflikeleft-option">
            <div>关注</div>
            <div>最新</div>
            <div>最热</div>
        </div>
        <div class="selflikeperson">
            <div class="selflikepersonitem" v-for="(person,index) in personnames" :key="index">
                <div class="personimg"><img :src="person.imgurl" alt=""></div>
                <div class="personname">{{person.name}}</div>
            </div>
        </div>
    </div>
    <div class="remarkcenter">
        <div class="haveupdate">
            有更新
        </div>
        <div v-for="(remark , index) in remarks" :key="index" class="remark" :class="`remark${index + 1}`" >
            <div class="remarkimg"><img :src="remark.remarkimg" alt=""></div>
            <div class="remarktext">{{remark.remarktext}} </div>
        </div>
        <div class="remarkimgdisplay">
            <div class="remarkleftimg"></div>
            <div class="remarkrightimg"></div>
        </div>
        <div class="likeperson">
            <div class="likepersonimg"><img src="~@/assets/personimg.png" alt=""></div>
            <div class="time">{{time}}</div>
            <div class="commuicate">
                <div class="sharecontent">              
                    <div class="share"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.75 6.49996C3.6837 6.49996 3.62011 6.5263 3.57322 6.57319C3.52634 6.62007 3.5 6.68366 3.5 6.74996V13.25C3.5 13.388 3.612 13.5 3.75 13.5H12.25C12.3163 13.5 12.3799 13.4736 12.4268 13.4267C12.4737 13.3799 12.5 13.3163 12.5 13.25V6.74996C12.5 6.68366 12.4737 6.62007 12.4268 6.57319C12.3799 6.5263 12.3163 6.49996 12.25 6.49996H11.25C11.0511 6.49996 10.8603 6.42094 10.7197 6.28029C10.579 6.13964 10.5 5.94887 10.5 5.74996C10.5 5.55105 10.579 5.36028 10.7197 5.21963C10.8603 5.07898 11.0511 4.99996 11.25 4.99996H12.25C13.216 4.99996 14 5.78396 14 6.74996V13.25C14 13.7141 13.8156 14.1592 13.4874 14.4874C13.1592 14.8156 12.7141 15 12.25 15H3.75C3.28587 15 2.84075 14.8156 2.51256 14.4874C2.18437 14.1592 2 13.7141 2 13.25V6.74996C2 5.78396 2.784 4.99996 3.75 4.99996H4.75C4.94891 4.99996 5.13968 5.07898 5.28033 5.21963C5.42098 5.36028 5.5 5.55105 5.5 5.74996C5.5 5.94887 5.42098 6.13964 5.28033 6.28029C5.13968 6.42094 4.94891 6.49996 4.75 6.49996H3.75ZM7.823 0.176963C7.84622 0.153681 7.87381 0.135209 7.90418 0.122606C7.93456 0.110003 7.96712 0.103516 8 0.103516C8.03288 0.103516 8.06544 0.110003 8.09582 0.122606C8.12619 0.135209 8.15378 0.153681 8.177 0.176963L11.073 3.07296C11.1081 3.10793 11.1319 3.15251 11.1416 3.20107C11.1513 3.24962 11.1464 3.29996 11.1274 3.34569C11.1084 3.39143 11.0763 3.43051 11.0351 3.45797C10.9939 3.48544 10.9455 3.50005 10.896 3.49996H8.75V9.24996C8.75 9.44888 8.67098 9.63964 8.53033 9.78029C8.38968 9.92095 8.19891 9.99996 8 9.99996C7.80109 9.99996 7.61032 9.92095 7.46967 9.78029C7.32902 9.63964 7.25 9.44888 7.25 9.24996V3.49996H5.104C5.05449 3.50005 5.00607 3.48544 4.96487 3.45797C4.92368 3.43051 4.89157 3.39143 4.87261 3.34569C4.85365 3.29996 4.8487 3.24962 4.85838 3.20107C4.86806 3.15251 4.89195 3.10793 4.927 3.07296L7.823 0.176963Z" fill="#545454"/>
</svg></div>
                    <div class="sharenumber">{{sharenumber}}</div>
                    </div>
                <div class="comcontent">  
                    <div class="com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.33333 8H5.33933M7.994 8H8M10.6607 8H10.6667" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 14.6663C11.6819 14.6663 14.6667 11.6815 14.6667 7.99967C14.6667 4.31777 11.6819 1.33301 8 1.33301C4.3181 1.33301 1.33333 4.31777 1.33333 7.99967C1.33333 9.06614 1.58375 10.0741 2.02897 10.968C2.14729 11.2055 2.18667 11.4771 2.11808 11.7334L1.72101 13.2175C1.54863 13.8617 2.13801 14.451 2.78223 14.2787L4.26626 13.8816C4.52262 13.813 4.79414 13.8524 5.03169 13.9707C5.92558 14.4159 6.93353 14.6663 8 14.6663Z" stroke="#545454" stroke-width="1.5"/>
</svg></div>
                <div class="comnumber">{{comnumber}}</div></div>
                <div class="likecontent"> 
                    <div class="like"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <g clip-path="url(#clip0_348_18)">
    <path d="M7 12.4499L1.48 7.4499C-1.52 4.4499 2.89 -1.3101 7 3.3499C11.11 -1.3101 15.5 4.4699 12.52 7.4499L7 12.4499Z" fill="white" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_348_18">
      <rect width="14" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg></div>
                <div class="likenumber">{{likenumber}}</div></div>
            </div>
        </div>
    </div>
    <div class="allremark">
        <div class="allremarktext">全部评论</div>
        <div class="remarknumber">({{remarknumber}})条</div>
        <div class="remarkitem" v-for="(remarkitem , index) in remarkitems" :key="index">
        <div class="remarkitem-img"><img :src="remarkitem.itemimg" alt=""></div>
        <div class="remarkitem-name">{{remarkitem.name}}</div>
        <div class="remarkitem-time">{{remarkitem.time}}</div>
        <div class="remarkitem-ip">IP:{{remarkitem.ip}}</div>
        <div class="remarkitem-remark">{{remarkitem.content}}</div>
        <div class="remarkitem-option">
            <div class="remarklike">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <path d="M5.00001 3.33334L4.75334 3.29234C4.74739 3.32815 4.74931 3.36483 4.75896 3.39983C4.76862 3.43483 4.78578 3.4673 4.80925 3.49499C4.83273 3.52269 4.86195 3.54494 4.89489 3.56019C4.92784 3.57545 4.96371 3.58335 5.00001 3.58334V3.33334ZM1.33334 3.33334V3.08334C1.26704 3.08334 1.20345 3.10968 1.15657 3.15656C1.10968 3.20345 1.08334 3.26704 1.08334 3.33334H1.33334ZM2.00001 6.91667H5.78668V6.41667H2.00001V6.91667ZM6.18668 3.08334H5.00001V3.58334H6.18668V3.08334ZM5.24668 3.37434L5.51534 1.76267L5.02201 1.68034L4.75334 3.29234L5.24668 3.37434ZM4.94001 1.08334H4.86868V1.58334H4.93968L4.94001 1.08334ZM3.82834 1.64001L2.99001 2.89767L3.40601 3.17501L4.24434 1.91734L3.82834 1.64001ZM2.64334 3.08334H1.33334V3.58334H2.64334V3.08334ZM1.08334 3.33334V6.00001H1.58334V3.33334H1.08334ZM6.68568 6.18001L7.08568 4.18001L6.59568 4.08167L6.19568 6.08167L6.68568 6.17967V6.18001ZM2.99001 2.89767C2.95198 2.95477 2.90043 3.00126 2.83996 3.03365C2.77948 3.06603 2.71195 3.08299 2.64334 3.08301V3.58301C2.95001 3.58301 3.23601 3.43001 3.40601 3.17501L2.99001 2.89767ZM5.51534 1.76267C5.52923 1.67913 5.52476 1.59323 5.50225 1.51159C5.47973 1.42995 5.43971 1.35419 5.38496 1.28957C5.33021 1.22496 5.26205 1.17304 5.18521 1.13743C5.10837 1.10181 5.0247 1.08336 4.94001 1.08334L4.93968 1.58334C4.95176 1.58337 4.96402 1.58603 4.97498 1.59113C4.98593 1.59623 4.99565 1.60365 5.00345 1.61288C5.01125 1.6221 5.01695 1.63292 5.02015 1.64457C5.02336 1.65621 5.02399 1.66842 5.02201 1.68034L5.51534 1.76267ZM6.18668 3.58301C6.45001 3.58301 6.64668 3.82367 6.59534 4.08134L7.08568 4.17967C7.1122 4.04671 7.1089 3.90918 7.07601 3.77764C7.04312 3.6461 6.98145 3.52349 6.89546 3.41866C6.80947 3.31383 6.7013 3.22937 6.57873 3.17139C6.45617 3.11341 6.32227 3.08333 6.18668 3.08334V3.58334V3.58301ZM5.78668 6.91667C5.99858 6.91672 6.20395 6.84301 6.36785 6.7087C6.53176 6.57439 6.64407 6.38745 6.68568 6.17967L6.19568 6.08134C6.17678 6.17587 6.12569 6.26093 6.05111 6.32202C5.97653 6.3831 5.88308 6.41677 5.78668 6.41667V6.91667ZM4.86868 1.08334C4.6629 1.08336 4.46031 1.13384 4.27888 1.23095C4.09746 1.32806 3.94282 1.46845 3.82868 1.63967L4.24434 1.91734C4.31286 1.81456 4.4057 1.72996 4.51461 1.67169C4.62353 1.61343 4.74515 1.5833 4.86868 1.58334V1.08334ZM2.00001 6.41667C1.77001 6.41667 1.58334 6.23001 1.58334 6.00001H1.08334C1.08334 6.24312 1.17992 6.47628 1.35183 6.64819C1.52374 6.8201 1.7569 6.91667 2.00001 6.91667V6.41667Z" fill="#A7A4A4"/>
  <path d="M2.66669 3.33301V6.66634" stroke="#A7A4A4"/>
                </svg> 
            {{remarkitem.likenumber}}
            </div>
            <div class="remarkdislike">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <path d="M5.00001 4.66666L4.75334 4.70766C4.74739 4.67185 4.74931 4.63517 4.75896 4.60017C4.76862 4.56517 4.78578 4.5327 4.80925 4.50501C4.83273 4.47731 4.86195 4.45506 4.89489 4.43981C4.92784 4.42455 4.96371 4.41665 5.00001 4.41666V4.66666ZM1.33334 4.66666V4.91666C1.26704 4.91666 1.20345 4.89032 1.15657 4.84344C1.10968 4.79655 1.08334 4.73296 1.08334 4.66666H1.33334ZM2.00001 1.08333L5.78668 1.08333V1.58333L2.00001 1.58333V1.08333ZM6.18668 4.91666H5.00001V4.41666H6.18668V4.91666ZM5.24668 4.62566L5.51534 6.23733L5.02201 6.31966L4.75334 4.70766L5.24668 4.62566ZM4.94001 6.91666H4.86868V6.41666H4.93968L4.94001 6.91666ZM3.82834 6.35999L2.99001 5.10233L3.40601 4.82499L4.24434 6.08266L3.82834 6.35999ZM2.64334 4.91666H1.33334V4.41666H2.64334V4.91666ZM1.08334 4.66666L1.08334 1.99999H1.58334L1.58334 4.66666H1.08334ZM6.68568 1.81999L7.08568 3.81999L6.59568 3.91833L6.19568 1.91833L6.68568 1.82033V1.81999ZM2.99001 5.10233C2.95198 5.04523 2.90043 4.99874 2.83996 4.96635C2.77948 4.93397 2.71195 4.91701 2.64334 4.91699V4.41699C2.95001 4.41699 3.23601 4.56999 3.40601 4.82499L2.99001 5.10233ZM5.51534 6.23733C5.52923 6.32087 5.52476 6.40677 5.50225 6.48841C5.47973 6.57005 5.43971 6.64581 5.38496 6.71043C5.33021 6.77504 5.26205 6.82696 5.18521 6.86257C5.10837 6.89819 5.0247 6.91664 4.94001 6.91666L4.93968 6.41666C4.95176 6.41663 4.96402 6.41397 4.97498 6.40887C4.98593 6.40377 4.99565 6.39635 5.00345 6.38712C5.01125 6.3779 5.01695 6.36708 5.02015 6.35543C5.02336 6.34379 5.02399 6.33158 5.02201 6.31966L5.51534 6.23733ZM6.18668 4.41699C6.45001 4.41699 6.64668 4.17633 6.59534 3.91866L7.08568 3.82033C7.1122 3.95329 7.1089 4.09082 7.07601 4.22236C7.04312 4.3539 6.98145 4.47651 6.89546 4.58134C6.80947 4.68617 6.7013 4.77063 6.57873 4.82861C6.45617 4.88659 6.32227 4.91667 6.18668 4.91666V4.41666V4.41699ZM5.78668 1.08333C5.99858 1.08328 6.20395 1.15699 6.36785 1.2913C6.53176 1.42561 6.64407 1.61255 6.68568 1.82033L6.19568 1.91866C6.17678 1.82413 6.12569 1.73907 6.05111 1.67798C5.97653 1.6169 5.88308 1.58323 5.78668 1.58333V1.08333ZM4.86868 6.91666C4.6629 6.91664 4.46031 6.86616 4.27888 6.76905C4.09746 6.67194 3.94282 6.53155 3.82868 6.36033L4.24434 6.08266C4.31286 6.18544 4.4057 6.27004 4.51461 6.32831C4.62353 6.38657 4.74515 6.4167 4.86868 6.41666V6.91666ZM2.00001 1.58333C1.77001 1.58333 1.58334 1.76999 1.58334 1.99999H1.08334C1.08334 1.75688 1.17992 1.52372 1.35183 1.35181C1.52374 1.1799 1.7569 1.08333 2.00001 1.08333V1.58333Z" fill="#A7A4A4"/>
  <path d="M2.66669 4.66699L2.66669 1.33366" stroke="#A7A4A4"/>
</svg>
            </div>
            <div class="remarkremark">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
  <path d="M2 3H2.00225M2.99775 3H3M3.99775 3H4" stroke="#A7A4A4" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 5.5C4.3807 5.5 5.5 4.3807 5.5 3C5.5 1.61929 4.3807 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 3.39992 0.593905 3.7779 0.760865 4.11312C0.805235 4.2022 0.820002 4.30402 0.79428 4.40015L0.645378 4.95668C0.580738 5.19825 0.801752 5.41925 1.04334 5.35463L1.59985 5.20573C1.69598 5.18 1.7978 5.19477 1.88688 5.23912C2.22209 5.4061 2.60008 5.5 3 5.5Z" stroke="#A7A4A4" stroke-width="0.5"/>
</svg>
            </div>
        </div>
        <div class="remarktextcontent"></div>
    </div>
    <div class="selfremark">
        <div class="selfimg"><img src="~@/assets/selfimg.png" alt=""></div>
        <div class="sayyour">
            <div class="saysomething">说出你的看法吧</div>
            <div class="sayyourbtn">发表
            </div>
            </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Selflike',
data(){
    return{
        personnames:[
            {
            imgurl:require("@/assets/personimg.png"),
            name:'Cody Fisher',
            },
            {
            imgurl:require("@/assets/personimg2.png"),
            name:'Senny White',
            },
            {
            imgurl:require("@/assets/personimg3.png"),
            name:'Niko Genny'
            },
            {
            imgurl:require("@/assets/personimg4.png"),
            name:'Body John'
            },
            {
            imgurl:require("@/assets/personimg5.png"),
            name:'Body Simple'
            },
            ],
        remarks:[
        {remarkimg:require("@/assets/remark1.png"),remarktext:'这是哪一个朝代的？充满文人风骨，真是一幅好画！'},
        {remarkimg:require("@/assets/remark2.png"),remarktext:'很不错的一幅画。我认为可以.....'},
        {remarkimg:require("@/assets/remark3.png"),remarktext:'感谢你的分享，对我很有帮助！'},
        ],
        time:'10. 24, 2018',
        sharenumber:'999+',
        comnumber:'129',
        likenumber:'984',
        remarknumber:'129',
        remarkitems:
        [
            {
                itemimg:require("@/assets/remarkimg1.png"),
                name:'带墨镜的男人',
                time:'2 周前',
                ip:'杭州',
                content:'很不错的一幅画！ 👍',
                likenumber:'58'
            },
            {
                itemimg:require("@/assets/remarkimg2.png"),
                name:'金色',
                time:'5 小时前',
                ip:'北京',
                content:'这画真好看！',
                likenumber:'75'
            } 
        ]
    }
},
}
</script>

<style scoped>
.selflike{
    margin-top: 60px;
    width: 1440px;
    height: 543px;
    display: flex;
}
.selflike-left{
    width: 292px;
    height: 543px;
}
.selflikeleft-option{
    width: 292px;
    height: 63px;
    display: flex;
}
.selflikeleft-option div{
    width: 33%;
    height: 63px;
    text-align: center;
    line-height: 63px;
    color: #A7A4A4;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 2.45px;
}
.selflikeperson{
    width: 100%;
    height: 483px;
}
.selflikepersonitem{
    width: 100%;
    height: 60px;
    margin-bottom:35px ;
}
.personimg{
    position: relative;
    top: 32px;
    left: 47.7px;
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 52px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.personimg img{
    width: 52px;
    height: 52px;
    border-radius: 52px;
}
.personname{
    line-height: 52px;
    position: relative;
    left: 121.7px;
    color: #000;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.275px;
}
.remarkcenter{
    width: 717.3px;
    height: 543px;
}
.haveupdate{
    width: 60px;
    height: 19px;
    position: relative;
    top: 21px;
    left: 51.3px;
    color: #545454;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.8px;
}
.remark{
    width: 350px;
    height: 31px;
    border-radius: 30px;
    background: rgba(217, 217, 217, 0.50);
    display: flex;
}
.remarkimg{
    position: relative;
    top: 5px;
    left: 6px;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 22px;
}
.remarkimg img{
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 22px;
}
.remarktext{
    position: relative;
    top: 8px;
    left: 15px;
    line-height: 31px;
    color: #545454;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.75px;
}
.remark1{
    position: relative;
    top: 42px;
    left: 247.3px;
}
.remark2{
    position: relative;
    top: 65px;
    left: 143.3px;
}
.remark3{
    position: relative;
    top: 85px;
    left: 360.3px;
}
.remarkimgdisplay{
    overflow: hidden;
    position: relative;
    top: 115px;
    margin: auto;
    width: 669px;
    height: 233px;
    display: flex;
}
.remarkleftimg{
width: 461px;
height: 219px;
border-radius: 15px;
background: url('~@/assets/remarkleftimg.png');
background-size: cover;
box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.remarkrightimg{
position: absolute;
left: 479px;
width: 461px;
height: 219px;
border-radius: 15px;
background: url('~@/assets/remarkleftimg.png');
background-size: cover;
box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
overflow: hidden;
}
.likeperson{
    width: 100%;
    height: 80px;
    position: relative;
    top: 116px;
    display: flex;
}
.likepersonimg{
    position: relative;
    left: 25px;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 36px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.likepersonimg img{
    width: 36px;
    height: 36px;
    border-radius: 36px;
}
.time{
    position: relative;
    left: 30px;
    top: 15px;
    color: #545454;
font-family: Inter;
font-size: 11px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.925px;
}
.commuicate{
    position: relative;
    top: 15px;
    left: 135px;
    width: 200px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    color: #545454;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.75px;
}
.sharecontent,.comcontent,.likecontent{
    width: 60px;
    display: flex;
    justify-content: space-around;

}
.allremark{
    width: 430px;
    height: 542px;  
}
.allremarktext{
    position: relative;
    top: 22px;
    color: #000;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 2.8px;
}
.remarknumber{
position: relative;
top: 3px;
left: 85px;
color: #000;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.75px;
}
.remarkitem{
    width: 100%;
    height: 205px;
}
.remarkitem-img{
    position: relative;
    top: 25px;
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    border-radius: 29px;
}
.remarkitem-img img{
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    border-radius: 29px;
}
.remarkitem-time{
position: relative;
left: 40px;
top: -8px;
color: #A7A4A4;
font-family: Inter;
font-size: 7px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.remarkitem-remark{
position: relative;
top: -18px;
left: 40px;
color: #000;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.remarkitem-name{
position: relative;
top: -8px;
left: 40px;
color: #545454;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.75px;
}
.remarkitem-ip{
position: relative;
top:-23px;
left: 100px;
color: #A7A4A4;
font-family: Inter;
font-size: 7px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.remarkitem-option{
    position: relative;
    top: -15px;
    left: 40px;
    display: flex;
    justify-content: space-between;
    width: 120px;
    height: 20px;
    color: #A7A4A4;
    font-family: Inter;
    font-size: 4px;
    font-style: normal;
    font-weight: 400;
}
.remarkitem-option svg{
    width: 15px;
    height: 15px;
    position: relative;
    top: 2px;
}

.remarkdislike svg{
    width: 15px;
    height: 15px;
    position: relative;
    top: 3px;
}
.remarktextcontent{
width: 337px;
height: 88px;
flex-shrink: 0;
border-radius: 5px;
background: #F8F8F8;
position: relative;
top: 10px;
left: 40px;
}
.selfimg{
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    border-radius: 29px;
}
.selfimg img {
     width: 29px;
    height: 29px;
    flex-shrink: 0;
    border-radius: 29px;
    position: relative;
    top: 5px;
}
.sayyour{
    display: flex;
    position: relative;
    top: 10px;
color: #9D9D9D;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 36px;
letter-spacing: 1.75px;
    width: 430px;
height: 36px;
flex-shrink: 0;
border-radius: 15px;
background: #F5F5F5;
box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
.saysomething{
position: relative;
top: 10px;
left: 15px;
width: 99px;
color: #9D9D9D;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.75px;
}
.sayyourbtn{
position: relative;
top: 6px;
left: 280px;
width: 50px;
height: 25px;
flex-shrink: 0;
border-radius: 25px;
background: #B93F3F;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: #FFF;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 400;
text-align: center;
line-height: 25px;
letter-spacing: 1.75px;
}
</style>