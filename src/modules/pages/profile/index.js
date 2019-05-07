import React, { Component } from 'react'
import { ScrollView, Image, TouchableOpacity as Button } from 'react-native'
import { connect } from 'react-redux'
import { View } from 'react-native-animatable'
import { Navigation } from "react-native-navigation"
import InvertedScrollView from 'react-native-invertible-scroll-view'
import { Text, Icon } from '../../components/font'
import Loading from '../../components/loading'
import Tabbar from '../../components/tabbar'
import r from '../../styles/rinc'
import g from '../../styles/general'
import s from './style'

class Profile extends Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={[r.full]}>
        <View style={[r.full]}>
          <ScrollView contentContainerStyle={[]}>
            <View style={[s.head, r.hCenter]}>
              <View style={[s.avatar, r.bgLight3]}>
                {/* <Image /> */}
              </View>
              <Text bold size={18} style={[g.primary, r.topM20]}>
                شایان بهروزی
              </Text>
              <Text size={13} style={[g.primary, r.topM3]}>
                گالری روبی
              </Text>
              <Text size={11} style={[g.gray1, r.topM10, r.hP30, r.centerText]} numberOfLine={3}>
              تهران، سعادت آباد، خیابان ۳۴ غربی، ساختمان ملوک، پلاک ۷۲، طبقه ششم، واحد دوم
              </Text>

              <Button 
                style={[s.headButton, r.center, r.topM50]}
                onPress={null}
              >
                <Text size={11} style={[g.primary]}>ویرایش مشخصات</Text>
              </Button>
            </View>

            <View style={[s.rowBtns, s.blockBorders, r.rtl, r.wFull, r.hCenter]}>
              <Button 
                style={[r.full, r.center]}
                onPress={null}
              >
                <Icon name={'setting'} size={22} style={[g.gray2]} />
                <Text size={11} style={[r.topM10]} >تنظیمات</Text>
              </Button>

              <View style={[s.sepLine]} />

              <Button 
                style={[r.full, r.center]}
                onPress={null}
              >
                <Icon name={'envelop'} size={16} style={[g.gray2]} />
                <View style={[s.newMessageDot, g.bgRed]} />
                <Text size={11} style={[r.topM10]} >پیام</Text>
              </Button>

              <View style={[s.sepLine]} />

              <Button 
                style={[r.full, r.center]}
                onPress={null}
              >
                <Icon name={'bill'} size={20} style={[g.gray2]} />
                <Text size={11} style={[r.topM10]} >صورتحساب</Text>
              </Button>

              <View style={[s.sepLine]} />

              <Button 
                style={[r.full, r.center]}
                onPress={null}
              >
                <Icon name={'orders'} size={18} style={[g.gray2]} />
                <Text size={11} style={[r.topM10]} >سفارشات</Text>
              </Button>
            </View>

            <View style={[s.graySpace]} />
            
            <View style={[s.rowBtns, s.blockBorders, r.rtl, r.hP40]}>
              <View style={[r.center]}>
                <Icon name={'sort'} size={60} style={[g.primary]} />
              </View>

              <View style={[r.vCenter, r.rightM10, r.rightItems, r.padd5]}>
                <Text style={[g.primary,]} size={11}>سطح اعتبار و دسترسی</Text>
                <Text style={[g.primary, r.round3, s.acsessBtn, r.topM5]} size={11}>نقره ای</Text>
              </View>

              <View style={[r.full, r.center]}>
                <Text size={50} style={[r.primary, r.topM15, r.lightFont]}>55%</Text>
              </View>
            </View>

            <View style={[s.graySpace]} />

            <View style={[s.getMorePoints, r.vP20]}>
              <Text style={[g.gray1,r.hM20]} size={11}>کسب امتیاز بیشتر</Text>
              <InvertedScrollView
                contentContainerStyle={[r.padd10, r.leftP30]}
                horizontal
                inverted
                showsHorizontalScrollIndicator={false}
              >
                <HRowItem 
                  title={'گرفتن دسترسی طلایی'}
                  description={'تایید دسترسی شما به سطح طلایی'}
                  value={80}
                  onPress={null}
                />
                <HRowItem 
                  title={'گرفتن دسترسی طلایی'}
                  description={'تایید دسترسی شما به سطح طلایی'}
                  value={80}
                  onPress={null}
                />
                <HRowItem 
                  title={'گرفتن دسترسی طلایی'}
                  description={'تایید دسترسی شما به سطح طلایی'}
                  value={80}
                  onPress={null}
                />

              </InvertedScrollView>
            </View>

            <View style={[r.hP20]}>
              <View style={[r.rtl, r.spaceBetween]}>
                <View style={[r.center]}>
                  <Text style={[g.primary, r.lightFont]} size={12}>دسترسی نقره ای</Text>
                  <Text size={30} style={[r.primary, r.topM5]}>55%</Text>
                </View>
                <View style={[r.center]}>
                  <Text style={[g.primary, r.lightFont]} size={12}>سطح بعدی</Text>
                  <Text size={12} style={[r.primary, r.topM5, r.lightFont]}>
                    <Text>طلایی</Text>
                    <Text>  </Text>
                    <Text>80%</Text>
                  </Text>
                </View>
              </View>

              <View style={[r.topM5, r.rightItems, r.bottomM20]}>
                <View style={[s.line]} />
                <View style={[s.progress, { width: '60%' }]} />
              </View>
            </View>

            <View style={[g.bgGray4, r.wFull, r.vP10, r.center]}>
              <View style={[r.rtl, r.w50, r.spaceAround]}>
                <Text size={12} style={[g.gray1, r.lightText]}>عضو از تاریخ</Text>
                <Text size={12} style={[g.gray1, r.lightText]}>1397/3/15</Text>
              </View>
            </View>

          </ScrollView>
        </View>
        <Tabbar componentId={this.props.componentId} active={'profile'} />
      </View>
    )
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const HRowItem = props => (
  <Button 
    style={[s.hRowItem]}
    activeOpacity={0.6}
    onPress={props.onPress}
  >
    <View 
      style={[r.padd10, r.hFull, r.rightP30, r.rightM10, 
        r.spaceAround, r.rightItems, g.bgDark1
      ]} // android has clipping issue so I did this way
    >
      <Text size={14} bold style={[r.white]}>{props.title}</Text>
      <Text size={12} style={[r.white]}>{props.description}</Text>
      <Text size={12} bold style={[r.white, r.lightFont]}>{props.value}%</Text>
    </View>
    <View style={[s.hRowSidePlus, r.absolute, r.right, g.bgPrimary, r.center]}>
      <Icon name={'plus'} size={15} style={[r.white]} />
    </View>
  </Button>
)