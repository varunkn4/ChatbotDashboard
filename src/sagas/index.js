import { takeLatest, all } from 'redux-saga/effects';
import verifyAuth from '../pages/login/saga';

import fetchChartData from '../containers/charts/saga';
import {fetchInsightData,fetchUnidentifiedList} from '../containers/insightCharts/saga';
import downloadIntents from '../pages/dashboard/saga';

function* actionWatcher() {
  yield takeLatest('LOGIN:DO_LOGIN', verifyAuth);
  yield takeLatest('DASHBOARD:CHART:CHART_DATA:FETCH', fetchChartData);
  yield takeLatest('DASHBOARD:INSIGHT:INSIGHT_DATA:FETCH', fetchInsightData);
  yield takeLatest('DASHBOARD:INSIGHT:UNIDENTIFIED_DATA:FETCH', fetchUnidentifiedList);
  yield takeLatest('DASHBOARD:INSIGHT:DOWNLOAD_INTENTS:FETCH', downloadIntents);
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}
