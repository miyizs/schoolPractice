import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

const initialItemsState  = {
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

function schoolItemReducer(state = initialItemsState, action) {
    return state
}


var reducers = combineReducers({
    schoolItemReducer,
    routing
});

export default reducers;
