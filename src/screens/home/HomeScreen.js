import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  ActivityIndicator,
} from "react-native";
import { Header } from "../../components/atoms";
import { Colors, Typography } from "../../styles";
import { useSelector } from "react-redux";
import { List, AddTask } from "../../components/atoms";
import { useDispatch } from "react-redux";
import * as TasksActions from "../../actions/TasksActions";
import { TaskList } from "../../components/organisms";
import * as TodoActions from "../../actions/TasksAddActions";

const HomeScreen = (props) => {

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState();

  const displayList = useSelector((state) => state.TaskData.data);
  const displayTasks = useSelector((state) => state.AddTasks.dataTasks);

  const dispatch = useDispatch();

  const loadTasks = useCallback(async () => {
    setRefresh(true);
    setError(null);
    try {
      await dispatch(TasksActions.fetchList());
      await dispatch(TodoActions.fetchTodo());
    } catch (err) {
      alert(err);
      console.log(err);
    }

    setTimeout(() => {
      setRefresh(false);
    }, 200);

  }, [dispatch, setLoading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 200);

    loadTasks().then(() => {
      setLoading(false);
    });
  }, [dispatch, loadTasks]);

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.LIGHT,
        }}
      >
        <Text
          style={{
            fontFamily: Typography.FONT_FAMILY_POPPIS,
            color: Colors.GRAY,
            fontSize: 17,
          }}
        >
          No tasks found
        </Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.LIGHT,
        }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!loading && displayTasks.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.LIGHT,
        }}
      >
        <Text
          style={{
            fontFamily: Typography.FONT_FAMILY_POPPIS,
            color: Colors.GRAY,
            fontSize: 17,
          }}
        >
          No Tasks Found!
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.hero}>
      <View style={styles.listContainer}>
        <FlatList
          refreshing={refresh}
          onRefresh={loadTasks}
          data={displayList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={(post) => (
            <List
              title={post.item.title}
              border={post.item.border}
              onSelect={() =>
                props.navigation.navigate("create", {
                  //  id: post.item.id,
                })
              }
            />
          )}
          horizontal
          style={styles.col}
        />
        <AddTask onSelect={() => props.navigation.navigate("create")} />
        <View style={styles.bottom}>
          <FlatList
            refreshing={refresh}
            onRefresh={loadTasks}
            data={displayTasks}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <TaskList
                title={itemData.item.title}
                time={itemData.item.time}
                onClick={() => props.navigation.navigate("create-task")}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hero: {
    backgroundColor: Colors.LIGHT,
    flex: 1,
  },

  col: {
    paddingTop: 50,
    paddingLeft: 43,
  },

  bottom: {
    paddingTop: 70,
  },
});

export default HomeScreen;
