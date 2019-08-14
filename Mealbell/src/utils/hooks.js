import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import * as Permissions from 'expo-permissions';

export function onBackPress(fn) {
  // When the component is first created, add a listener
  useEffect(() => {
    const listener = BackHandler.addEventListener('hardwareBackPress', () => {
      fn();

      return true;
    });

    // A return from useEffect will be executed when the component is destroyed
    return () => BackHandler.removeEventListener(listener);
  }, []);
}

/**
 * Given a list of system permissions, ensures that the user has granted all
 * the required permissions
 * If the user has not given the app the permissions requested,
 * prompts for the permissions.
 * If a permission is denied, calls onError.
 * @param {*} onSuccess Fn<void, void>
 * @param {*} onError Fn<PermissionType, void>
 * @param {*} permissions PermissionType[]
 */
export function ensurePermissions(onSuccess, onError, permissions) {
  useEffect(() => {
    (async () => {
      try {
        const requestedPermissions = await Permissions.getAsync(...permissions);
        let permissionDenied = false;
        const permissionRequests = Object.entries(requestedPermissions.permissions)
            .filter(([, permission]) =>
              permission.status && permission.status !== 'granted'
            )
            .map(async ([permissionName]) => {
              const request = await Permissions.askAsync(permissionName);
              if (request.status === 'denied' && !permissionDenied) {
                permissionDenied = true;
                onError(permissionName);
              }
            });
        await Promise.all(permissionRequests);

        if (!permissionDenied) onSuccess();
      } catch (error) {
        onError();
      }
    })();
  });
}
