import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

const initialSchoolItems  = {
    school:[
      {
        schoolProjectName:'校园概况',
        schoolItems:[
          {title:'中国传媒大学 传媒学子的梦想',author:'伍甲五月'},
          {title:'这是第二条 传媒学子的梦想',author:'第二条'},
          {title:'这是第三条 传媒学子的梦想',author:'第三条'},
          {title:'这是第四条 传媒学子的梦想',author:'第四条'},
          {title:'这是第五条 传媒学子的梦想',author:'第五条'},
          {title:'这是第六条 传媒学子的梦想',author:'第六条'}
        ]
      },
      {
        schoolProjectName:'校园景点',
        schoolItems:[
          {title:'中国传媒大学 传媒学子的梦想',author:'伍甲五月'},
          {title:'这是第二条 传媒学子的梦想',author:'第二条'},
          {title:'这是第三条 传媒学子的梦想',author:'第三条'},
          {title:'这是第四条 传媒学子的梦想',author:'第四条'},
          {title:'这是第五条 传媒学子的梦想',author:'第五条'}
        ]
      },
      {
        schoolProjectName:'特色院系',
        schoolItems:[
          {title:'中国传媒大学 传媒学子的梦想',author:'伍甲五月'},
          {title:'这是第二条 传媒学子的梦想',author:'第二条'},
          {title:'这是第三条 传媒学子的梦想',author:'第三条'},
          {title:'这是第四条 传媒学子的梦想',author:'第四条'},
          {title:'这是第五条 传媒学子的梦想',author:'第五条'}
        ]
      }
    ],
    qaList:[
        {
            question:'想去教室上晚自习,但是不清楚校园大门几点关,所以请问下是否有知道的同学告知下具体的时间?',
            questioner:'张亮-LEO,我是张亮,我是16级10班的学长',
            money:'6',
            people:10,
            src:"http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
        },
        {
            question:'想去教室上晚自习,但是不清楚校园大门几点关,所以请问下是否有知道的同学告知下具体的时间?',
            questioner:'张亮-LEO,我是张亮,我是16级10班的学长',
            money:'6',
            people:10,
            src:"http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
        },
        {
            question:'想去教室上晚自习,但是不清楚校园大门几点关,所以请问下是否有知道的同学告知下具体的时间?',
            questioner:'张亮-LEO,我是张亮,我是16级10班的学长',
            money:'6',
            people:10,
            src:"http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
        },
        {
            question:'想去教室上晚自习,但是不清楚校园大门几点关,所以请问下是否有知道的同学告知下具体的时间?',
            questioner:'张亮-LEO,我是张亮,我是16级10班的学长',
            money:'6',
            people:10,
            src:"http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
        }
    ]

}

const initialLiveItems = [
    {
        status:'crowd',
        statusName:'众筹中',
        title:'[鱼说LIVE]中国传媒大学,体育馆',
        anchor:'um叮铃',
        residue:12,
        price:1,
        people:0,
        time:0
    },
    {
        status:'progressing',
        statusName:'进行中',
        title:'[鱼说LIVE]中国传媒大学,创业区',
        anchor:'巴菲猫',
        residue:12,
        price:1,
        people:3242,
        time:0
    },
    {
        status:'notstart',
        statusName:'未开始',
        title:'[鱼说LIVE]中国传媒大学,创业区',
        anchor:'巴菲猫',
        residue:12,
        price:1,
        people:3242,
        time:'2016.07.16 07:00'
    },
    {
        status:'over',
        statusName:'已结束',
        title:'[鱼说LIVE]中国传媒大学,创业区',
        anchor:'巴菲猫',
        residue:12,
        price:1,
        people:3242,
        time:'2016.07.16 07:00'
    }
]

const initialTab ={
    tabList:['firstActive','secondActive','thirdActive'],
    currentActive:0
}

const initialPageInfo = {
    status:'notStart',
    title:'鱼说中国传媒大学创业区',
    people: 3421
}

function pageReducer(state=initialPageInfo, action){
    if(action.type == 'CHOOSE_PROJECT'){
        console.log(
            Object.assign({},state,{status:action.status,title:action.title,people:action.people})
        )
        return Object.assign({},state,{status:action.status,title:action.title,people:action.people})
    }
    return state
}

function tabReducer(state = initialTab, action){
    if(action.type == 'CHOOSE_TAB'){
       if(action.idx == 0){
           return Object.assign({},state,{currentActive:0})
       }else if(action.idx ==1){
           return Object.assign({},state,{currentActive:1})
       }else{
           return Object.assign({},state,{currentActive:2})
       }
    }
    return state
}

function schoolItemReducer(state = initialSchoolItems, action) {
    return state
}

function monthReducer(state = initialLiveItems, action){
    if(action.type == 'CHOOSE_MONTH'){
        if(action.idx !== 0 ){
            return []
        }
        return Object.assign([],state,initialLiveItems)
    }
    return state
}

var reducers = combineReducers({
    tabReducer,
    schoolItemReducer,
    monthReducer,
    pageReducer,
    routing
});

export default reducers;
