declare namespace Store {
  interface State {
    server: NotionState
    client: NotionState
  }
  type RootState = State
}
