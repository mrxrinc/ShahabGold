import { pallete } from '../../styles/general'

export default {
  head: {
    paddingTop: 60,
    paddingBottom: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: pallete.gray3,
    borderWidth: 0.5
  },
  headButton: {
    width: 180,
    height: 30,
    borderColor: pallete.gray3,
    borderWidth: 1
  },
  blockBorders: {
    borderColor: pallete.gray3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5
  },
  rowBtns: {
    height: 100,
  },
  sepLine: {
    backgroundColor: pallete.gray3,
    width: 1,
    height: 40
  },
  newMessageDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    top:3
  },
  graySpace: {
    backgroundColor: pallete.gray4,
    height: 12
  },
  acsessBtn: {
    borderWidth: 0.5,
    borderColor: pallete.gray3,
    paddingVertical: 2,
    paddingHorizontal: 5
  },
  getMorePoints: {
    borderColor: pallete.gray3,
    borderTopWidth: 0.5
  },
  hRowItem: {
    width: 260,
    height: 90,
    marginLeft: 20
  },
  hRowSidePlus: {
    width: 30,
    height: 70,
    top: 10,
  },
  line: {
    width: '100%',
    height: 15,
    borderColor: pallete.dark1,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0
  },
  progress: {
    height: 6,
    backgroundColor: pallete.dark1,
    position: 'absolute',
    bottom: -3
  }
}